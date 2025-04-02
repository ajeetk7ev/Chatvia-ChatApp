import React from 'react'
import authLogo from '@/assets/logo-dark.png'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import { LoaderIcon } from 'react-hot-toast'


interface AuthFormProps {
    page: string,
    formData: {
        username: string;
        password: string
    },

    setFormData: any;
    submitHandler: any;
}

function AuthForm({ page, formData, setFormData, submitHandler }: AuthFormProps) {
    const { loading } = useSelector((state: RootState) => state.auth);
    function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
        <div className='w-full h-full flex flex-col items-center pt-[150px] gap-3'>

            <img src={authLogo} width={170} />

            <div className='flex flex-col items-center '>
                <h1 className='font-semibold text-2xl'>{page === 'signup' ? 'sign up' : 'Sign in'}</h1>
                <h2 className='text-[#7a7f9a] font-medium '>{page === 'signup' ? "Get your Chatvia account now." : "Sign in to continue to Chatvia."}</h2>
            </div>

            <Card className="w-[350px] ">
                <CardContent>
                    <form onSubmit={submitHandler}>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name" className='font-medium text-gray-500'>Username</Label>
                                <Input
                                    value={formData.username}
                                    id="username"
                                    name='username'
                                    placeholder="Enter your username"
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="password" className='font-medium text-gray-500'>Pasword</Label>
                                <Input
                                    value={formData.password}
                                    type='password'
                                    id="password"
                                    name='password'
                                    placeholder="Enter your password"
                                    onChange={changeHandler}
                                />
                                {page === 'signin' && <div className='flex justify-end text-gray-500 cursor-pointer'>Forgot your password?</div>}
                            </div>

                        </div>

                        <Button
                            type='submit'
                            className='w-full bg-[#5d2de6] hover:bg-[#7269ef] mt-4 transition-all duration-200'
                        >
                            {loading ? <LoaderIcon/> : page === 'signup' ? "Sign Up" : "Sign In"}
                        </Button>
                    </form>
                </CardContent>

            </Card>


            <div className='space-y-2'>
                <div className='text-gray-500 text-center space-x-1'>
                    <span>{page === 'signup' ? "Already have an account ? " : "Don't have an account ?"}</span>
                    <Link to={page === 'signup' ? "/signin" : "/signup"}>
                        <span className='text-blue-500 font-medium cursor-pointer underline '>{page === 'signup' ? "Signin" : "Signup Now"}</span>
                    </Link>

                </div>

                <p className='text-gray-500 font-md'>© 2025 Chatvia.  Crafted with  &#10084; by Themesbrand </p>
            </div>




        </div>
    )
}

export default AuthForm