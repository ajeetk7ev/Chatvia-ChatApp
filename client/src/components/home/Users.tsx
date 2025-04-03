

import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Loader2 } from 'lucide-react';
import React from 'react'

interface UsersProps{
    loading:boolean;
    users:any;
    recipient:string | "";
    setRecipient:React.Dispatch<React.SetStateAction<string | "">>;
}

const Users:React.FC<UsersProps> = ({ loading, users, recipient, setRecipient})=> {
    //console.log("users is ",users);
  return (
    <div className='min-h-screen w-[350px] bg-[#f5f7fb] flex justify-center border-r-2'>
        <div className='mt-10'>
            <h1 className='text-xl font-semibold text-gray-500 mb-4'>Chats</h1>
            <div className=' flex flex-col  gap-5'>
            {
                loading ? (<Loader2 />) :(
                    users.map((user:any)=>(
                       <div 
                       key={user._id} 
                       className={`flex items-center py-2 px-4 gap-4 hover:bg-gray-200 rounded-md ${recipient === user._id ? "bg-gray-200 " : ""} `}
                        onClick={()=>setRecipient(user?._id)}
                       >
                        <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" width={40} height={40} className='rounded-full' />
                        <AvatarFallback>CN</AvatarFallback>
                       </Avatar>

                       <span>{user?.username}</span>
                       </div>
                    ))
                )
            }
            </div>
            
        </div>
    </div>
  )
}

export default Users