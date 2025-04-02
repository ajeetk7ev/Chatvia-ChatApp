import React, { useState } from 'react'
import Logo from '@/assets/chatApplogo.svg'
import { IoIosContact } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';


function Sidebar() {
    const [selectCategory,setSelectCategory] =  useState("chart");
    return (
        <div className='h-screen w-[75px] border-r-2 bg-white flex flex-col items-center justify-around'>
            <div className='w-full h-[90%] flex flex-col items-center justify-between '>
                <div>
                    <img src={Logo} alt="logo" width={30} />
                </div>

                <div className='flex flex-col gap-7 justify-center'>
                    <IoIosContact 
                    className={`text-3xl  ${selectCategory == "profile" ? "text-[#7269ef] bg-[#f7f7ff] rounded-md" : "text-gray-500" }`}
                    onClick={()=>setSelectCategory("profile")}
                     />
                    <IoChatbubbleEllipsesOutline 
                    className={`text-3xl  ${selectCategory == "chart" ? "text-[#7269ef] bg-[#f7f7ff] rounded-md" : "text-gray-500" }`}
                    onClick={()=>setSelectCategory("chart")}
                     />
                    <MdOutlineSettings  
                    className={`text-3xl  ${selectCategory == "setting" ? "text-[#7269ef] bg-[#f7f7ff] rounded-md" : "text-gray-500" }`}
                    onClick={()=>setSelectCategory("setting")}
                     />
                </div>

                <div>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" width={40} height={40} className='rounded-full' />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </div>
    )
}

export default Sidebar