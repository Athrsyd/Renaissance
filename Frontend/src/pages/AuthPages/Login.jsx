// import React from 'react'
import { FaGoogle, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import HookAuth from '../../Hook/HookAuth';


const Login = () => {
    const { email, password, message, handleChange, handleSubmitLogin } = HookAuth();

    return (
        <div className='text-beige bg-[url("/Bg-Auth.png")] bg-cover bg-center h-screen flex flex-col justify-center items-center gap-5'>
            {/* <div className="background">
                <img className='w-full h-screen' src="/Bg-Auth.png" alt="" />
            </div> */}
            <div className="container flex flex-col py-7 h-9/10 justify-center w-100 border border-khaki items-center gap-5 bg-bistre/50 backdrop-blur-xs p-10 rounded-3xl">
                <div className="title">
                    <h1 className='text-2xl font-bold'>LOGIN</h1>
                </div>
                <form action="" method="post" className='text-beige w-full flex flex-col gap-4 justify-center items-start'>
                    {/* <label className='text-khaki -mb-3 ml-3' htmlFor="username">Username</label> */}
                    {/* <input className='border-2 w-full rounded-3xl border-khaki py-2 px-5 text-start' type="text" name="username" id="username" placeholder='Username' /> */}
                    <label className='text-khaki -mb-3 ml-3' htmlFor="email">Email</label>
                    <input className='border-2 w-full rounded-3xl border-khaki py-2 px-5 text-start' type="email" name="email" id="email" placeholder='Email' value={email} onChange={handleChange} />
                    <label className='text-khaki -mb-3 ml-3' htmlFor="password">Password</label>
                    <input className='border-2 w-full rounded-3xl border-khaki py-2 px-5 text-start' type="password" name="password" id="password" placeholder='Password' value={password} onChange={handleChange} />
                    <div className="w-full flex justify-center">
                        <button className='bg-beige text-bistre w-full font-bold py-3 px-10 rounded-xl hover:bg-amber-600' type='submit' onClick={handleSubmitLogin}>LOGIN</button>
                    </div>
                    {message && <p className='text-red-500'>{message}</p>}
                </form>
                <div className="flex items-center w-full gap-3 text-sm text-beige/25 before:content-[''] before:flex-1 before:h-px before:bg-khaki/40 after:content-[''] after:flex-1 after:h-px after:bg-khaki/40">OR</div>
                <div className="buttons flex flex-col gap-10">
                    <div className="sosmed flex flex-row gap-5 text-2xl justify-center">

                        <FaGoogle />
                        <FaFacebookSquare />
                        <FaInstagramSquare />
                        <br /><br />
                    </div>
                    <p className='text-sm text-white  '>HAVE NOT AN ACCOUNT ?<a href="/register" className='text-beige/80 hover:text-beige'>{' '}REGISTER</a></p>
                </div>
            </div>
        </div>
    )
}

export default Login