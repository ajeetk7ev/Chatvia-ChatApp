// import { setLoading } from "@/slices/authSlice";
// import axios from 'axios';
// import { authEndpoints } from "../api";
// import { AppDispatch } from "@/app/store";

// // interface FormData{
// //     formData:{
// //         username:string;
// //         password:string
// //     }
// // }

// const {SIGNUP_API,SIGNIN_API} = authEndpoints;


// export const signup = (formData:{username:string,password:string},na)=>{
//     console.log("form data is",formData);
//     return async(dispatch:AppDispatch)=>{
//          dispatch(setLoading(true));
//          try {
//             const res = await axios.post(
//                 SIGNUP_API,
//                 formData,
//             );
//             console.log('RESPONSE IS ',res);
//          } catch (error) {
//             console.log(error);
//          }
//     }
// }


// export const signin = (formData:{username:string,password:string})=>{
//       return async(dispatch:AppDispatch)=>{
//          dispatch(setLoading(true));
//          try {
//             const res = axios.post(SIGNIN_API,formData);
//             console.log('RESPONSE IS ',res);
//          } catch (error) {
//             console.log("error",error);
//          }
//       }
// }