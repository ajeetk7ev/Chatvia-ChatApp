import Sidebar from '@/components/home/Sidebar';
import Users from '@/components/home/Users';
import UsersConversation from '@/components/home/UsersConversation';
import { userEndpoints } from '@/services/api';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/localStorage';
import axios from 'axios';


import { useEffect, useState } from 'react';

function Home() {
  const { GET_USERS_API } = userEndpoints;
  const [users,setUsers] = useState(getFromLocalStorage("users") ? getFromLocalStorage("users") : []);
  const [loading,setLoading] = useState(false);
  const [recipient ,setRecipient ] = useState("");

  async function getUsers(){
    setLoading(true);
      try {
       
        const res = await axios.get(GET_USERS_API);
        console.log('RESPONSE IS ',res);
        const { success, message, users } = res.data;
        setToLocalStorage("users",users);
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
   }

   useEffect(()=>{
      getUsers();
   },[]);

  return (
    <div className='w-screen h-screen flex '>
        <Sidebar/>
        <Users loading={loading} users={users} recipient={recipient} setRecipient={setRecipient}/>
        <UsersConversation/>
    </div>
  )
}

export default Home;