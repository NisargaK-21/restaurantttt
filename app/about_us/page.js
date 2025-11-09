"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";
import Hero from "../components/hero";
import RestanVedio from "../components/restan_vedio";
import Chef from "../components/chef";

export default function AboutUs() {
    return(
                <div className="font-serif space-x-1">
                   <Header/>
                   <Hero title="About us" subtitle="Home--About us"/>

                   <div className="flex flex-col justify-center items-center w-full h-[350px] md:h-[450px] bg-cover bg-center bg-no-repeat relative bg-[#F3F1ED]">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <h1 className="text-lg sm:text-xl md:text-2xl text-[#8b6b3b] mb-6 mt-10 md:mt-20 text-center">OUR TRUSTED 8K HAPPY PARTNER</h1>
                    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-12 px-4 md:px-0">
                      <img 
                      className="w-[100px] sm:w-[120px] md:w-[150px] h-auto"
                      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=1080&q=75"/>
                      <img 
                      className="w-[100px] sm:w-[120px] md:w-[150px] h-auto"
                      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=1080&q=75"/>
                      <img 
                      className="w-[100px] sm:w-[120px] md:w-[150px] h-auto"
                      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=1080&q=75"/>
                      <img 
                      className="w-[100px] sm:w-[120px] md:w-[150px] h-auto"
                      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=1080&q=75"/>
                      <img 
                      className="w-[100px] sm:w-[120px] md:w-[150px] h-auto"
                      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F1.png&w=1080&q=75"/>
                    </div>
                   </div>
                   

                   <div className="flex flex-">
                    <img src="https://www.daysoftheyear.com/wp-content/uploads/waiters-day.jpg"/>
                    <img src=""/>
                    <div>

                    </div>
                   </div>


                  <div className=" ">
                     <Chef/>
                  </div>

                   <RestanVedio/>

                   <Footer/>
                </div>             
    )
}