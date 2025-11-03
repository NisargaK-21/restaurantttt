"use client";
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import {useState} from 'react';

export default function OrderConfirmationPage() {
      const [email,setEmail]=useState("");
      const [Name,setName]=useState("");
    return (
        <div className="bg-white/10 dark:bg-black min-h-screen">
            <Header/>
            <div className="w-[350px] h-[500px] mx-auto mt-20 mb-30 justify-center items-center flex flex-col border-4">
                   <input
                     placeholder='Name'
                     required={true}
                     className='bg-blue-500 p-3 my-3 border-2 '
                     onChange={(event)=>{
                       setName(event.target.value);
                     }}
                   ></input>
                    <input
                     placeholder='Email'
                     required={true}
                     className='bg-blue-500 p-3 my-3 border-2'
                     onChange={(event)=>{
                       setEmail(event.target.value);
                     }}
                     >
                     </input>

            </div>
            <Footer/>
        </div>
    )
}