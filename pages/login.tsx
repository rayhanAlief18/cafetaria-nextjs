import React from 'react'
import Image from 'next/image';
import { VscMail, VscLock } from "react-icons/vsc";
import { useState } from "react";
import { useRouter } from "next/router";
import { METHODS } from 'http';
import { headers } from 'next/headers';
import axios from 'axios';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from '../utils/axios/axiosConfig';


export default function Login() {
  
  // const [formData, setFormData] = useState({email:"",password:""});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try{
      // axios.defaults.withCredentials = true;
      // // await axios.get("http://localhost:8000/sanctum/csrf-cookie");
      // await api.get('/sanctum/csrf-cookie');

      // const csrfToken  = decodeURIComponent(
      // document.cookie
      // .split("; ")
      // .find(row => row.startsWith("XSRF-TOKEN="))
      // ?.split("=")[1] ?? ""); 

      // if (!csrfToken) {
      //   console.error("CSRF Token not found! Please run your Laravel.");
      //   return;
      // }
      
      // console.log(csrfToken);  // Debugging
      // console.log("document.cookie: ");
      // console.log(document.cookie);
      

      
      const res = await api.post("/api/login",{ email:email, password:password },{
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          // "X-XSRF-TOKEN": csrfToken
        },
        withXSRFToken:true,
        
        
      });
      localStorage.setItem("token", res.data.access_token);
      toast.success("Login Berhasil")
      // localStorage.setItem("user", JSON.stringify(res.data.user)); // Simpan data user

      // Redirect ke Menu
      setTimeout(() => {
        router.push("/Menu");
      }, 2000);
    } catch(err:any) {
      setError((err as Error).message);
      toast.error("Login gagal: " + (err.response?.data?.message || err.message));
      // console.error("Login failed:", err.response?.data || err.message);
    };
  }

  return (
    <>
        <ToastContainer position="top-right" autoClose={3000} />
    
        <section className='
            w-full h-screen 
            p-10
            flex lg:flex-row sm:flex-col align-items-center
        '>
          <div className='
            w-[45%]
            border rounded-[30px]
            bg-green-700
            border-green-500
            relative
            overflow-hidden
          '>
            <p className='
            p-10
            font-fredoka text-4xl text-white
            '>Ray Coffe</p>

            <Image
              src={`/Login/mascot.png`}
              width={1000}
              height={0}
              alt={"Login Form"}
              className="md:w-[89%] lg:left-[70px] -mt-20 absolute"
              priority
            />

          </div>

          <div className='
            w-[55%]
            flex flex-col gap-10 justify-center items-center
            font-fredoka
          
          '>
            
            <h1 className='
            lg:text-[5rem] font-semibold
            text-[#508D69]
            '>Login</h1>

            <form onSubmit={handleSubmit} className='w-[50%]' method='POST'>
              <div className='flex flex-col gap-2 group'>
                <label htmlFor="" className='text-xl group-focus-within:text-green-600'>Email</label>
                <div className='
                  border-[3px] border-gray-200 rounded-xl py-3 px-5
                  flex flex-row gap-2 items-center
                  
                  focus-within:border-green-500
                  transition-colors duration-200
                '>
                <VscMail size={25} className='
                  group-focus-within:text-green-600
                  transition-colors duration-200
                '/>
                <div className='w-[2px] h-[25px] rounded-full bg-gray-700 group-focus-within:bg-green-500'> </div>
                <input type="email" name='email' 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
                className='
                  border-none
                  font-fredoka
                  text-xl
                  focus:outline-0
                  focus:text-green-600
                ' />
                </div>
              </div>
              
              <div className='flex flex-col gap-2 mt-7 group'>
                <label htmlFor="" className='text-xl group-focus-within:text-green-600'>Password</label>
                <div className='
                  border-[3px] border-gray-200 rounded-xl py-3 px-5
                  flex flex-row gap-2 items-center
                  group 
                  focus-within:border-green-500
                  transition-colors duration-200
                '>
                <VscLock size={25} className='
                  group-focus-within:text-green-600
                  transition-colors duration-200
                '/>
                <div className='w-[2px] h-[25px] rounded-full bg-gray-700 group-focus-within:bg-green-500'> </div>
                <input type="password" name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className='
                  border-none
                  font-fredoka
                  text-xl
                  focus:outline-0
                  focus:text-green-600
                ' />
                </div>
              </div>

              <div className='flex justify-end'>
                <p className='text-green-800 mt-2'>Forgot Password ?</p>
              </div>

              {error && <p className="text-red-600 mt-3">{error}</p>}

              <button 
              className='
              border-[3px] border-[#508D69] rounded-xl py-3 px-5 mt-10 
              lg:mt-10
              w-full h-[55px]
              text-xl
              hover:bg-[#508D69] transition-colors duration-300 focus:outline-0 hover:text-white focus:text-white hover:btnAnimate focus:btn_animate animation
              
              '>Log In</button>

            </form>

          </div>

        </section>
    </>
  )
}
