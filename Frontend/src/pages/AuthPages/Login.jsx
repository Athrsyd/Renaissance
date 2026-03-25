import { FaGoogle, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { useState } from "react";
import { EyeOff, Eye } from 'lucide-react';
import BackButton from "../../components/BackButton";

const HookAuth = () => ({
    email: '', password: '', message: '',
    handleChange: () => {}, handleSubmitLogin: () => {}, isLoading: false,
});


const Login = () => {
    const { email, password, message, handleChange, handleSubmitLogin, isLoading } = HookAuth();
    const [togglePassword, setTogglePassword] = useState(false);

    return (
        <div className='text-beige bg-[url("/Bg-Auth.png")] bg-cover bg-center min-h-screen flex flex-col justify-center items-center gap-5 px-4 py-8'>
            <BackButton />
            <div className="container relative flex flex-col py-7 justify-center w-full max-w-xs sm:max-w-sm md:max-w-md border border-khaki items-center gap-5 bg-bistre/50 backdrop-blur-xs p-5 md:p-10 rounded-3xl">
                <div className="title">
                    <h1 className='text-2xl font-bold'>LOGIN</h1>
                </div>
                {message && <p className='text-sm text-center text-beige/80'>{message}</p>}

                <form action="" method="post" className='text-beige w-full flex flex-col gap-4 justify-center items-start'>

                    <label className='text-khaki -mb-3 ml-3' htmlFor="email">Email</label>
                    <input className='border-2 w-full rounded-3xl border-khaki py-2 px-5 text-start bg-transparent'
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Email'
                        value={email}
                        onChange={handleChange} />

                    <label className='text-khaki -mb-3 ml-3' htmlFor="password">Password</label>
                    <div className="relative w-full">
                        <input className='border-2 w-full rounded-3xl border-khaki py-2 px-5 text-start bg-transparent'
                            type={togglePassword ? "text" : "password"}
                            name="password" id="password"
                            placeholder='Password'
                            value={password}
                            onChange={handleChange} />
                        <button type="button" onClick={() => setTogglePassword(!togglePassword)} className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer outline-0">
                            {togglePassword ? <EyeOff size={20} color="#CDB9A4" /> : <Eye size={20} color="#CDB9A4" />}
                        </button>
                    </div>

                    <div className="w-full flex justify-center items-center mt-5">
                        <button
                            className='bg-beige text-bistre w-full font-bold py-3 px-10 rounded-xl hover:bg-amber-600'
                            type='submit'
                            onClick={handleSubmitLogin}
                            disabled={isLoading}>
                            {isLoading ? "Logging in..." : "LOGIN"}
                        </button>
                    </div>
                </form>

                <div className="flex items-center w-full gap-3 text-sm text-beige/25 before:content-[''] before:flex-1 before:h-px before:bg-khaki/40 after:content-[''] after:flex-1 after:h-px after:bg-khaki/40">OR</div>

                <div className="buttons flex flex-col gap-10">
                    <div className="sosmed flex flex-row gap-5 text-2xl justify-center">
                        <FaGoogle />
                        <FaFacebookSquare />
                        <FaInstagramSquare />
                    </div>
                    <p className='text-sm text-white'>HAVE NOT AN ACCOUNT ?<a href="/register" className='text-beige/80 hover:text-beige'>{' '}REGISTER</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;