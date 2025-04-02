import AuthForm from '@/components/auth/AuthForm'
import React, { FormEvent, useState } from 'react'
import { authEndpoints } from '@/services/api';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '@/slices/authSlice';
import axios from 'axios'
import toast from 'react-hot-toast';


function Signup() {
    const [formData,setformData] = useState({
        username:"",
        password:""
    });

   const {SIGNUP_API} = authEndpoints;
   const dispatch = useDispatch();
   const navigate = useNavigate();
 

    async function signupHandler(e:React.FormEvent<FormEvent>){
        e.preventDefault();
        dispatch(setLoading(true));
        try {
            const response = await axios.post(SIGNUP_API, formData);
            
            console.log("RESPONSE IS ", response);
            const { success, message } = response.data;
    
            if (success) {
                toast.success(message);
                navigate('/login');
            } else {
                toast.error(message || "Signup failed. Please try again.");
            }
        } catch (error: any) {
            console.error("Error during signup:", error);
    
            if (axios.isAxiosError(error) && error.response) {
                const errorMessage = error.response.data?.message || "Signup failed. Please try again.";
                toast.error(errorMessage);
            } else {
                toast.error("Network error. Please check your connection.");
            }
        } finally {
            dispatch(setLoading(false));
        }
       
    }

    console.log("formData is",formData);
  return (
    <div>
        <AuthForm submitHandler={signupHandler} formData={formData} setFormData={setformData} page='signup'/>
    </div>
  )
}

export default Signup