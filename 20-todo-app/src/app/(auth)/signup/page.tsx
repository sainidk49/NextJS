"use client";
import React, { useRef, useState } from 'react'

export default function Signup() {
    console.log("render")
    const userName = useRef<HTMLInputElement>(null);
    const [email, setEmail] = useState<HTMLInputElement>()
    const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
        e.preventDefault();
        const name = userName.current?.value;
        console.log("Form submitted", name, email);
    };
    return (
        <div className='bg-slate-900 min-h-screen flex justify-center items-center'>
            <div className="box-container bg-slate-100 max-w-screen-sm w-10/12 sm:w-8/12 md:w-3/12 p-5 shadow-md shadow-current rounded-lg">
                <h1 className='font-mono font-semibold text-3xl text-center mb-8 underline'>SignUp</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group block w-full mb-5">
                        <input type="text" ref={userName} className='block w-full text-md p-3 focus-visible:outline-none rounded-md' placeholder='name' />
                    </div>

                    <div className="form-group block w-full mb-5">
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} className='block w-full text-md p-3 focus-visible:outline-none rounded-md' placeholder='email' />
                    </div>

                    <div className="form-group block w-full mb-5">
                        <input type="password" className='block w-full text-md p-3 focus-visible:outline-none rounded-md' placeholder='password' />
                    </div>

                    <div className="form-group block w-full mb-5">
                        <input type="submit" value="submit" className='cursor-pointer bg-red-500 hover:bg-red-600 transition text-white w-6/12 text-md py-2 font-mono uppercase tracking-wide rounded-md' />
                    </div>
                </form>
            </div>
        </div>
    )
}
