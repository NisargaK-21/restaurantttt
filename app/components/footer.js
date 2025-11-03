"use client";
import React, { useState } from "react";

export default function Newsletter() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); 
  };


return (
    <div className="w-full mt-10 font-serif">

           <div className=" gap-10 ml-20 mr-20 flex flex-row justify-center items-center bg-black text-white p-20 mt-20 mb-[-50px] border-amber-50 border-1 rounded-lg relative">
            <div className="flex flex-col max-w-sm">
              <h1 className="text-2xl">About Us</h1>
             <div className="mb-15 gap-5">
                 <p>Continued at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.</p>
              <div className="flex flex-row gap-3 mt-2">
                <img className="w-[30px] h-[30px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxm5N50lV_gQyxfU7iG9eFvdUrFjJhR7QOrw&s" alt="facebook" />
                <img className="w-[30px] h-[30px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Twitter-new-logo.jpg/1200px-Twitter-new-logo.jpg" alt="twitter" />
                <img className="w-[30px] h-[30px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDydOoTB3mhWwxdum41PJYGshzdGDESOpT-g&s" alt="instagram" />
              </div>
             </div>
            </div>

            <div className="w-px h-40 bg-gray-300 opacity-40"></div>


            <div className="flex flex-col">
              <h1 className="text-2xl mb-1">Explore</h1>
              <div className="flex flex-col gap-2">
                <p className="hover:text-[#c2a676]">Company Profile</p>
                <p className="hover:text-[#c2a676]">About</p>
                <p className="hover:text-[#c2a676]">Help Center</p>
                <p className="hover:text-[#c2a676]">Career</p>
                <p className="hover:text-[#c2a676]">Features</p>
                <p className="hover:text-[#c2a676]">Contact</p>
              </div>
            </div>

            
            <div className="flex flex-col mt-0 w-56 ">
                <h1 className="text-2xl ">Contact Info</h1>
                <div className="mb-10 gap-5">
                    <p className="mt-2 flex flex-wrap">📍 175 10h Street, Office 375 Berlin, De 21562</p>
                    <br/>
                <p>📞 +47 3337 8901</p>
                <br/>
                <p>✉️ food@restan.com</p>
                </div>
            </div>

           
            <div className="flex flex-col w-56 relative mt-0">
                <h1 className="text-2xl">Newsletter</h1>
                <p className="mt-2 flex flex-wrap">Join our subscribers list to get the latest news and special offers.</p>
                <input type="email" placeholder="Your email address" className="mt-3 p-2 rounded text-white bg-gray-600"/>
                <button  onClick={handleSubscribe} className="mt-3 bg-[#c2a676] hover:bg-[#a38961] text-white font-bold py-2 px-4 rounded text-center cursor-pointer">Subscribe</button>
                {showPopup && (
                <div className="absolute top-[20%] right-0 mt-4 mr-4 bg-green-500 text-white font-semibold px-3  rounded-md shadow-md animate-fadeIn">
                Subscribed successfully
                </div>
                )}
                 
            </div>

        </div>


        <div className="bg-[#1f1f1f] flex flex-row items-center justify-between px-20 py-5">
            <img 
            className="w-[100px] h-[100px] mt-15"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F9.png&w=1920&q=75"/>
            <img 
            className="w-[100px] h-[80px] mt-15"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"/>
            <p className="flex ml-200 text-white mt-20">© Copyright 2025. Restan. All Rights Reserved</p>
        </div>


    </div>
 )
}

