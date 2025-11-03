"use client";

import Link from "next/link";
import React from "react";


export default function Header() {
  return (
    <div className="w-full font-serif">

      <div className="bg-[#8b6b3b] text-white flex justify-between items-center px-6 py-2 text-sm">
        <div className="flex gap-6">
          <p className="mr-6">📞 +47 3337 8901</p>
          <p>✉️ food@restan.com</p>
        </div>
        <div className="flex gap-4">
          <p>🌐 English</p>
          <img className="rounded-full w-[20px] h-[20px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxm5N50lV_gQyxfU7iG9eFvdUrFjJhR7QOrw&s" alt="facebook"/>
          <img className="rounded-full w-[20px] h-[20px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Twitter-new-logo.jpg/1200px-Twitter-new-logo.jpg" alt="twitter"/>
          <img className="rounded-full w-[20px] h-[20px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDydOoTB3mhWwxdum41PJYGshzdGDESOpT-g&s" alt="instagram"/>
        </div>
      </div>


      <div className="bg-black text-white flex justify-between items-center px-6 py-4r p-10 border-1 border-b-[#8b6b3b]">
       <div className="flex items-center gap-2">
        <img
         className="justify-center h-10 w-auto mr-4" 
         src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"/>
       </div>
       
       <nav className="flex  gap-17 justify-center items-center text-lg font-medium px-8 py-2 rounded">
        <Link href="/" className="text-white hover:text-[#c2a676] hover:underline transition-all">Home</Link>
        <Link href="/about" className="text-white hover:text-[#c2a676] hover:underline transition-all">About us</Link>
        <Link href="/menu" className="text-white hover:text-[#c2a676] hover:underline transition-all">Menu</Link>
        <Link href="/chef" className="text-white hover:text-[#c2a676] hover:underline transition-all">Chef</Link>
       </nav>
      </div>


    </div>
  )
}
    


