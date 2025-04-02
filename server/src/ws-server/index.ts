import { WebSocketServer, WebSocket } from "ws";
import dotenv from 'dotenv';
dotenv.config();
import { dbConnect } from "../lib/db";
import { Message } from "../models/Message";

dbConnect();

const wss = new WebSocketServer({ port: 8080 });
console.log("WebSocket server running on ws://localhost:8080");

interface ISocket {
  userId: string;
  socket: WebSocket;
}

let allSockets: ISocket[] = [];

wss.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("message", async (message) => {
    try {
      const data = JSON.parse(message.toString());

      if (data.type === "join") {
        const isJoined = allSockets.some((s) => s.socket === socket);

        if (!isJoined) {
          allSockets.push({
            socket: socket,
            userId: data.payload.userId,
          });
          console.log(`User ${data.payload.userId} joined.`);
        }
      }

      if (data.type === "message") {
        const { senderId, receiverId, content } = data.payload;

        const userData = allSockets.find((value) => value.userId === receiverId);
        if (userData) {
          userData.socket.send(JSON.stringify({ senderId, content }));
          console.log(`Message sent to ${receiverId}: ${content}`);
        } else {
          console.log(`User ${receiverId} not connected.`);
        }

        // Save the message to the database
        await Message.create({ senderId, receiverId, content });
        console.log("Message saved to the database.");
      }
    } catch (error) {
      console.error("Error handling message:", error);
    }
  });

  socket.on("close", () => {
    allSockets = allSockets.filter((s) => s.socket !== socket);
    console.log("Client disconnected");
  });
});
