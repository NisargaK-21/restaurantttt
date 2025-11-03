"use client"
import {useState,useEffect} from 'react'
import {useRouter} from "next/navigation"
import {useAuth}from "./contexts/AuthContext";

export default function Login() {
  const {login}=useAuth();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const router=useRouter();
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gray-900 '>
      <input
      placeholder='Email'
      required={true}
      className='bg-blue-500 p-3 my-3 border-2 '
      onChange={(event)=>{
        setEmail(event.target.value);
      }}
      >
      </input>
      <input
      placeholder='Password'
      required={true}
      className='bg-blue-500 p-3 my-3 border-2'
      onChange={(event)=>{
        setPassword(event.target.value);
      }}
      >
      </input>

      <button className='bg-blue-900 p-3 my-3'
      onClick={(event)=>{

        localStorage.setItem('emailValue',email);
        localStorage.setItem('passValue',password);

        login(email,password);
        router.push('/better-home');
      }}
      >
        Login
      </button>
    </div>
  )
}