"use client";
import React from 'react';
import { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useRouter } from 'next/navigation';
import Button from "../components/button";




export default function MenuPage() {
    const[page,setPage]=useState(0);

    const feedback =[
        {
           rating: 5,
           title: "Awesome and delicious food",
           text: "Breaking consultation discover apartments. Indulgence off under folly death wrote cause her way spite.",
           name: "Istiak Ahmed",
           role: "MARKETING MANAGER",  
        },
        {
           rating: 5,
           title: "A wonderful dining experience",
           text: "Everything from presentation to flavor was perfect. Service was attentive and the ambience calming.",
           name: "Maria Johnson",
           role: "FOOD CRITIC",
        },
        {
           rating: 5,
           title: "Best food in town!",
           text: "Absolutely loved it! The spices, freshness, and service all made this an unforgettable experience.",
           name: "Arjun Mehta",
           role: "CHEF CONSULTANT",
        }
    ]
    
    const handleNext=()=>setPage((page+1)%feedback.length);
    const handlePrev=()=>setPage((page-1+feedback.length)%feedback.length);

    return (
    <div className="font-serif">
        <Header/>
        <div className=" justify-center items-center flex flex-col w-[100%] h-[400px] bg-cover bg-[rgba(0,0,0,0.5)] bg-blend-multiply bg-[url('https://c2.staticflickr.com/4/3778/9611132192_601b130f4f_b.jpg')]">
            <h1 className="text-6xl text-white">Food Menu</h1>
            <br/>
            <p className="text-white">Home-food-menu</p>
        </div>

        <div className="flex flex-row mt-[100px] ">
            <div>
             <img
             className="w-[500px] h-[600px] ml-40 pt-5"
              src="https://www.afarmgirlsdabbles.com/wp-content/uploads/2023/02/Texas-toast-afarmgirlsdabbles-01v.jpg"/>
            <div className="relative bg-[#7b6332] text-center text-white w-[140px] h-[120px] flex flex-col justify-center items-center [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] relative ml-150 mt-[-500px]">
               <h2 className="text-lg font-semibold text-[#ffa500]">Menu</h2>
               <p className="text-sm text-white">Breakfast</p>
            </div>
            </div>



            <div className="ml-20">
               <div className="flex flex-row space-x-2 ml-123 mt-10">
                 <div className="pl-1.5  pb-3 pt-0.5 w-[45px] h-[30px] bg-gray-300 border-1 border-black text-black">Half</div>
                 <div className="pl-1.5 pb-3 pt-0.5 w-[45px] h-[30px] bg-gray-300 border-1 border-black text-black ">Full</div>
               </div>
          
               <div className=" flex flex-row">
                   <img 
                   className="w-[80px] h-[80px] rounded-full"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F1.jpg&w=640&q=75"/>
                   <div className="flex flex-row">
                    <div className="ml-7 mt-4">
                        <h1 className="text-2xl">Chicken Alfredo</h1>
                        <p className="text-gray-400 text-sm">Ricotta / goat cheese / beetroot</p>
                    </div>
                   <div className="flex flex-col space-y-1 mt-8 ml-3">
                     <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row space-x-1.5 mt-4 ml-3">
                       <h1 className="text-[#7b6332] text-2xl">$20</h1>
                       <h1 className="text-[#7b6332] text-2xl">$40</h1>
                    </div>
                    <p className="text-[#7b6332] ml-5">Free Drinks</p>
                    </div>
                   </div>
               </div>
               <br/>

               <div className=" flex flex-row">
                   <img 
                   className="w-[80px] h-[80px] rounded-full"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F2.jpg&w=640&q=75"/>
                   <div className="flex flex-row">
                    <div className="ml-7 mt-4">
                        <h1 className="text-2xl">Fish Chips</h1>
                        <p className="text-gray-400 text-sm">Atlantic / chips / salad / tartare</p>
                    </div>
                   <div className="flex flex-col space-y-1 mt-8 ml-3">
                     <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row space-x-1.5 mt-4 ml-3">
                       <h1 className="text-[#7b6332] text-2xl">$36</h1>
                       <h1 className="text-[#7b6332] text-2xl">$70</h1>
                    </div>
                    <p className="text-[#7b6332] ml-5">Free Drinks</p>
                    </div>
                   </div>
               </div>

               <br/>

               <div className=" flex flex-row">
                   <img 
                   className="w-[80px] h-[80px] rounded-full"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F3.jpg&w=640&q=75"/>
                   <div className="flex flex-row">
                    <div className="ml-7 mt-4">
                        <h1 className="text-2xl">Ebony Fillet Steak</h1>
                        <p className="text-gray-400 text-sm">Truffle mash / pepper sauce</p>
                    </div>
                   <div className="flex flex-col space-y-1 mt-8 ml-3">
                     <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row space-x-1.5 mt-4 ml-3">
                       <h1 className="text-[#7b6332] text-2xl">$44</h1>
                       <h1 className="text-[#7b6332] text-2xl">$85</h1>
                    </div>
                    <p className="text-[#7b6332] ml-5">Free Drinks</p>
                    </div>
                   </div>
               </div>
               <br/>


               <div className=" flex flex-row space-y-2">
                   <img 
                   className="w-[80px] h-[80px] rounded-full"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F4.jpg&w=640&q=75"/>
                   <div className="flex flex-row">
                    <div className="ml-7 mt-4">
                        <h1 className="text-2xl">Chicken Grill</h1>
                        <p className="text-gray-400 text-sm">Ricotta / goat cheese / beetroot</p>
                    </div>
                   <div className="flex flex-col space-y-1 mt-8 ml-3">
                     <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row space-x-1.5 mt-4 ml-3">
                       <h1 className="text-[#7b6332] text-2xl">$20</h1>
                       <h1 className="text-[#7b6332] text-2xl">$44</h1>
                    </div>
                    <p className="text-[#7b6332] ml-5">Free Drinks</p>
                    </div>
                   </div>
               </div>
            </div>
        </div>




        
        <div className="flex flex-row mt-[300px]">

            <div className="ml-20">
               <div className="flex flex-row space-x-2 ml-123 mt-10">
                 <div className="pl-1.5  pb-3 pt-0.5 w-[45px] h-[30px] bg-gray-300 border-1 border-black text-black">Half</div>
                 <div className="pl-1.5 pb-3 pt-0.5 w-[45px] h-[30px] bg-gray-300 border-1 border-black text-black ">Full</div>
               </div>
          
               <div className=" flex flex-row">
                   <img 
                   className="w-[80px] h-[80px] rounded-full"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F6.jpg&w=640&q=75"/>
                   <div className="flex flex-row">
                    <div className="ml-7 mt-4">
                        <h1 className="text-2xl">Brownies</h1>
                        <p className="text-gray-400 text-sm">Ricotta / goat cheese / beetroot</p>
                    </div>
                   <div className="flex flex-col space-y-1 mt-8 ml-3">
                     <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row space-x-1.5 mt-4 ml-3">
                       <h1 className="text-[#7b6332] text-2xl">$34</h1>
                       <h1 className="text-[#7b6332] text-2xl">$65</h1>
                    </div>
                    <p className="text-[#7b6332] ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>
               <br/>


               <div className=" flex flex-row">
                   <img 
                   className="w-[80px] h-[80px] rounded-full"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F8.jpg&w=640&q=75"/>
                   <div className="flex flex-row">
                    <div className="ml-7 mt-4">
                        <h1 className="text-2xl">Cheesecakes</h1>
                        <p className="text-gray-400 text-sm">Atlantic / chips / salad / tartare</p>
                    </div>
                   <div className="flex flex-col space-y-1 mt-8 ml-3">
                     <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row space-x-1.5 mt-4 ml-3">
                       <h1 className="text-[#7b6332] text-2xl">$55</h1>
                       <h1 className="text-[#7b6332] text-2xl">$100</h1>
                    </div>
                    <p className="text-[#7b6332] ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>

               <br/>

               <div className=" flex flex-row">
                   <img 
                   className="w-[80px] h-[80px] rounded-full"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F7.jpg&w=640&q=75"/>
                   <div className="flex flex-row">
                    <div className="ml-7 mt-4">
                        <h1 className="text-2xl">Muffins</h1>
                        <p className="text-gray-400 text-sm">Truffle mash / pepper sauce</p>
                    </div>
                   <div className="flex flex-col space-y-1 mt-8 ml-3">
                     <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row space-x-1.5 mt-4 ml-3">
                       <h1 className="text-[#7b6332] text-2xl">$66</h1>
                       <h1 className="text-[#7b6332] text-2xl">$120</h1>
                    </div>
                    <p className="text-[#7b6332] ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>
               <br/>


               <div className=" flex flex-row space-y-2">
                   <img 
                   className="w-[80px] h-[80px] rounded-full"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F5.jpg&w=640&q=75"/>
                   <div className="flex flex-row">
                    <div className="ml-7 mt-4">
                        <h1 className="text-2xl">Cupcakes</h1>
                        <p className="text-gray-400 text-sm">Ricotta / goat cheese / beetroot</p>
                    </div>
                   <div className="flex flex-col space-y-1 mt-8 ml-3">
                     <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row space-x-1.5 mt-4 ml-3">
                       <h1 className="text-[#7b6332] text-2xl">$20</h1>
                       <h1 className="text-[#7b6332] text-2xl">$40</h1>
                    </div>
                    <p className="text-[#7b6332] ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>
            </div>
             <div>
             <img
             className="w-[500px] h-[500px] ml-40 pt-5"
              src="https://thumbs.dreamstime.com/b/lunch-menu-grilled-chicken-broast-fillet-fresh-vegetable-salad-healthy-food-high-quality-photo-335365235.jpg"/>
            <div className="relative bg-[#7b6332] text-center text-white w-[140px] h-[120px] flex flex-col justify-center items-center [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] relative ml-150 mt-[-450px]">
               <h2 className="text-lg font-semibold text-[#ffa500]">Menu</h2>
               <p className="text-sm text-white">Lunch</p>
            </div>
            </div>

        </div>
        



        <div className=" text-white flex flex-row mt-50 w-[100%] h-[500px] bg-[url('https://wallpaperaccess.com/full/1381849.jpg')] bg-cover bg-center bg-no-repeat space-x-1.5">
          <div className="flex flex-col flex-wrap w-[550px] h-[400px] ml-50 mt-20">
            <h1 className="text-7xl font-semibold ">30 Minutes Delivery!</h1>
            <p className="mt-7 ">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you will have a hard time forgetting.</p>
           <div className="mt-10">
             <Button label="Order Now"/>
           </div>
          </div>
          <div>
            <img className="w-[420px] h-[520px] ml-70 pt-5 " src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=1920&q=75"/>
          </div>
        </div>









       <div className="flex flex-row mt-[100px] dark:bg-gray-800 p-10 mr-10 ml-10">
             <div className="ml-20">
                <h1 className="text-5xl ml-50">Sea Food</h1>
               <div className="flex flex-row space-x-2 ml-123 mt-10">
                 <div className="pl-1.5  pb-3 pt-0.5 w-[45px] h-[30px] bg-gray-300 border-1 border-black text-black">Half</div>
                 <div className="pl-1.5 pb-3 pt-0.5 w-[45px] h-[30px] bg-gray-300 border-1 border-black text-black ">Full</div>
               </div>
          
               <div className=" flex flex-row">
                   <img 
                   className="w-[80px] h-[80px] rounded-full"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F9.jpg&w=640&q=75"/>
                   <div className="flex flex-row">
                    <div className="ml-7 mt-4">
                        <h1 className="text-2xl">Salmon Fry</h1>
                        <p className="text-gray-400 text-sm">Ricotta / goat cheese / beetroot</p>
                    </div>
                   <div className="flex flex-col space-y-1 mt-8 ml-3">
                     <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row space-x-1.5 mt-4 ml-3">
                       <h1 className="text-[#7b6332] text-2xl">$40</h1>
                       <h1 className="text-[#7b6332] text-2xl">$80</h1>
                    </div>
                    <p className="text-[#7b6332] ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>
               <br/>


               <div className=" flex flex-row">
                   <img 
                   className="w-[80px] h-[80px] rounded-full"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F10.jpg&w=640&q=75"/>
                   <div className="flex flex-row">
                    <div className="ml-7 mt-4">
                        <h1 className="text-2xl">Pangasius or Basa</h1>
                        <p className="text-gray-400 text-sm">Atlantic / chips / salad / tartare</p>
                    </div>
                   <div className="flex flex-col space-y-1 mt-8 ml-3">
                     <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row space-x-1.5 mt-4 ml-3">
                       <h1 className="text-[#7b6332] text-2xl">$15</h1>
                       <h1 className="text-[#7b6332] text-2xl">$30</h1>
                    </div>
                    <p className="text-[#7b6332] ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>

               <br/>

               <div className=" flex flex-row">
                   <img 
                   className="w-[80px] h-[80px] rounded-full"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F11.jpg&w=640&q=75"/>
                   <div className="flex flex-row">
                    <div className="ml-7 mt-4">
                        <h1 className="text-2xl">Clams</h1>
                        <p className="text-gray-400 text-sm">Truffle mash / pepper sauce</p>
                    </div>
                   <div className="flex flex-col space-y-1 mt-8 ml-3">
                     <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row space-x-1.5 mt-4 ml-3">
                       <h1 className="text-[#7b6332] text-2xl">$45</h1>
                       <h1 className="text-[#7b6332] text-2xl">$90</h1>
                    </div>
                    <p className="text-[#7b6332] ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>
               <br/>


               <div className=" flex flex-row space-y-2">
                   <img 
                   className="w-[80px] h-[80px] rounded-full"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F12.jpg&w=640&q=75"/>
                   <div className="flex flex-row">
                    <div className="ml-7 mt-4">
                        <h1 className="text-2xl">Red Crab</h1>
                        <p className="text-gray-400 text-sm">Ricotta / goat cheese / beetroot</p>
                    </div>
                   <div className="flex flex-col space-y-1 mt-8 ml-3">
                     <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row space-x-1.5 mt-4 ml-3">
                       <h1 className="text-[#7b6332] text-2xl">$20</h1>
                       <h1 className="text-[#7b6332] text-2xl">$40</h1>
                    </div>
                    <p className="text-[#7b6332] ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>
            </div>



            <div className="ml-20">
                 <h1 className="text-5xl ml-50">Beverage</h1>
               <div className="flex flex-row space-x-2 ml-123 mt-10">
                 <div className="pl-1.5  pb-3 pt-0.5 w-[45px] h-[30px] bg-gray-300 border-1 border-black text-black">Half</div>
                 <div className="pl-1.5 pb-3 pt-0.5 w-[45px] h-[30px] bg-gray-300 border-1 border-black text-black ">Full</div>
               </div>
               
               <div className=" flex flex-row">
                   <img 
                   className="w-[80px] h-[80px] rounded-full"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F13.jpg&w=640&q=75"/>
                   <div className="flex flex-row">
                    <div className="ml-7 mt-4">
                        <h1 className="text-2xl">Wine</h1>
                        <p className="text-gray-400 text-sm">Ricotta / goat cheese / beetroot</p>
                    </div>
                   <div className="flex flex-col space-y-1 mt-8 ml-3">
                     <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row space-x-1.5 mt-4 ml-3">
                       <h1 className="text-[#7b6332] text-2xl">$34</h1>
                       <h1 className="text-[#7b6332] text-2xl">$65</h1>
                    </div>
                    <p className="text-[#7b6332] ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>
               <br/>


               <div className=" flex flex-row">
                   <img 
                   className="w-[80px] h-[80px] rounded-full"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F14.jpg&w=640&q=75"/>
                   <div className="flex flex-row">
                    <div className="ml-7 mt-4">
                        <h1 className="text-2xl">Coffee</h1>
                        <p className="text-gray-400 text-sm">Atlantic / chips / salad / tartare</p>
                    </div>
                   <div className="flex flex-col space-y-1 mt-8 ml-3">
                     <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row space-x-1.5 mt-4 ml-3">
                       <h1 className="text-[#7b6332] text-2xl">$45</h1>
                       <h1 className="text-[#7b6332] text-2xl">$90</h1>
                    </div>
                    <p className="text-[#7b6332] ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>

               <br/>

               <div className=" flex flex-row">
                   <img 
                   className="w-[80px] h-[80px] rounded-full"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F15.jpg&w=640&q=75"/>
                   <div className="flex flex-row">
                    <div className="ml-7 mt-4">
                        <h1 className="text-2xl">Hot Chocolate</h1>
                        <p className="text-gray-400 text-sm">Truffle mash / pepper sauce</p>
                    </div>
                   <div className="flex flex-col space-y-1 mt-8 ml-3">
                     <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row space-x-1.5 mt-4 ml-3">
                       <h1 className="text-[#7b6332] text-2xl">$44</h1>
                       <h1 className="text-[#7b6332] text-2xl">$85</h1>
                    </div>
                    <p className="text-[#7b6332] ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>
               <br/>


               <div className=" flex flex-row space-y-2">
                   <img 
                   className="w-[80px] h-[80px] rounded-full"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F16.jpg&w=640&q=75"/>
                   <div className="flex flex-row">
                    <div className="ml-7 mt-4">
                        <h1 className="text-2xl">Milk Shake</h1>
                        <p className="text-gray-400 text-sm">Ricotta / goat cheese / beetroot</p>
                    </div>
                   <div className="flex flex-col space-y-1 mt-8 ml-3">
                     <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col">
                    <div>
                        <div className="flex flex-row space-x-1.5 mt-4 ml-3">
                       <h1 className="text-[#7b6332] text-2xl">$20</h1>
                       <h1 className="text-[#7b6332] text-2xl">$40</h1>
                    </div>
                    <p className="text-[#7b6332] ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>
            </div>
        </div>

<div>
    
</div>
        <Footer />
    </div>
    )
}