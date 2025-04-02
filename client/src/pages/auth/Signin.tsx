import AuthForm from '@/components/auth/AuthForm'
import { setLoading, setToken, setUser } from '@/slices/authSlice';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { setToLocalStorage } from '@/utils/localStorage';
import { authEndpoints } from '@/services/api';

function Signin() {
     const [formData,setformData] = useState({
            username:"",
            password:""
        });
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const { SIGNIN_API } = authEndpoints;

    async function signinHandler(e:React.FormEvent<HTMLFormElement>){
         e.preventDefault();
         dispatch(setLoading(true));
       
     
         try {
             const response = await axios.post(SIGNIN_API, formData);
             console.log("SIGNIN RES IS ", response);
     
             const { success, user, message } = response.data;
     
             if (success) {
    
                 setToLocalStorage("token",user.token);
                 setToLocalStorage("user",user);
                 dispatch(setUser(user));
                 dispatch(setToken(user.token));
                 toast.success(message || "Signin successful!");
                 navigate('/');
             } else {
                 toast.error(message || "Signin failed. Please try again.");
             }
         } catch (error: any) {
             console.error("Error during signin:", error);
     
             if (axios.isAxiosError(error) && error.response) {
                 const errorMessage = error.response.data?.message || "Signin failed. Please try again.";
                 toast.error(errorMessage);
             } else {
                 toast.error("Network error. Please check your connection.");
             }
         } finally {
             dispatch(setLoading(false));
           
         }
    }
  return (
    <div>
        <AuthForm submitHandler={signinHandler} formData={formData} setFormData={setformData} page="signin" />
    </div>
  )
}

export default Signin