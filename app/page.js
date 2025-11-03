"use client";
import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Button from "./components/button";
import { useRouter } from "next/navigation";
import Menu from "./components/menu1";



export default function Home() {
  const router = useRouter();
    const [Phone, setPhone] = useState("");
    const [person, setPerson] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

  
    const handleSubmit = (e) => {
      e.preventDefault();
    };

  
  return (
    <div className="dark:bg-gray-800 min-h-screen text-white font-serif">
      <div className="w-full h-[900px] bg-[url('https://www.creativefabrica.com/wp-content/uploads/2024/01/08/Dark-Aesthetic-Restaurant-Hyper-Realistic-Graphic-88083936-1.png')] bg-cover bg-center">
      <Header />

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-8xl font-serif text-white text-center mt-20">Best Restaurant</h1>
        <div className="rounded-full w-[200px] h-[200px] border-2 border-amber-50 mt-20 mx-auto">
        <p className="font-bold text-amber-50 text-center mt-10" style={{ fontSize: '90px', lineHeight: 1 }}>
          ↗
        </p>
        </div>
      </div>


    <form onSubmit={handleSubmit}
     className="flex flex-col gap-4 w-[400px] shadow-lg bg-white border border-gray-800 text-black rounded-md mt-60 ml-20 h-[400px] p-10">
       <p className="text-3xl">Book a table</p> 

      <input
        type="tel"
        placeholder="Phone Number"
        value={Phone}
        onChange={(e) => setPhone(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6b3b] focus:border-transparent"
      />

      <input
        type="number"
        placeholder="No of people"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6b3b] focus:border-transparent"
      />

      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6b3b] focus:border-transparent"
      />

      <input
        type="time"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6b3b] focus:border-transparent"
      />

      <button 
        type="submit"
        className="bg-[#8b6b3b] text-white py-2 px-4 rounded-md hover:bg-[#c2a676] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#8b6b3b] focus:ring-offset-2"
        onClick={(e) => alert("Table Booked")}
     >
        Book a table
      </button>
    </form>
    </div>

    <div className="flex flex-row mt-[500px] border border-black p-10 text-black dark:text-white mx-10 rounded-2xl">
      <div className="flex flex-row">
        <div className="flex flex-col justify-center items-center">
        <img
        className="w-[100px] h-[100px]"
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75"/>
        <h1 className="text-2xl">Quality Foods</h1>
        <p className="text-center m-5">Belonging sir curiosity discovery extremity <br/> yet forfeited prevailed own off. Traveling by introduced of mr terminated.</p>
      </div>
      <div className="h-[300px] w-px bg-gray-500 dark:bg-gray-600"></div>
    </div>

     <div className="flex flex-row">
      <div className="flex flex-col justify-center items-center">
        <img 
        className="w-[100px] h-[100px]"
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=640&q=75"/>
        <h1 className="text-2xl">Fast Delivery</h1>
        <p className="text-center m-5">Belonging sir curiosity discovery extremity <br/> yet forfeited prevailed own off. Traveling by introduced of mr terminated.</p>
      </div>
      <div className="h-[300px] w-px bg-gray-500 dark:bg-gray-600"></div>
    </div>

      <div className="flex flex-col justify-center items-center">
         <img 
        className="w-[100px] h-[100px]"
        src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-sticker-with-a-cartoon-pizza-sticker-isolated-on-white-vector-png-image_12229935.png"
        width={100}
        height={100}/>
        <h1 className="text-2xl">Delicious recipes</h1>
        <p className="text-center m-5">Belonging sir curiosity discovery extremity <br/> yet forfeited prevailed own off. Traveling by introduced of mr terminated.</p>
      </div>

    </div>


    <div className="bg-[url('https://static.vecteezy.com/system/resources/previews/037/245/808/non_2x/ai-generated-beautuful-fast-food-background-with-copy-space-free-photo.jpg')] h-[600px] bg-cover bg-center w-auto mt-[200px] rounded-2xl mx-12 relative pr-10">
    <div className="absolute inset-0 bg-black/40"></div>
    <h1 className="text-2xl text-white font-bold relative z-7 pt-[100px] pl-[200px] ml-175">Today Special Offer</h1>
    <h1 className="text-5xl text-white font-bold relative z-7 pt-10 pl-[100px] ml-200">Explore Irresistible Promotions!</h1>
    <p className="text-white relative z-7 pt-10 pl-[100px] ml-200">Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary.</p>
   <div className="ml-225 mt-10" >
     <Button 
     label="Order Today" />
   </div>
    </div>


   <div className="flex flex-col border-1 boder-black justify-center items-center mt-50">
    <img 
    className="w-[300px] h-[200px]"
    src="https://www.ambiance-sticker.com/images/Image/sticker-restaurant-menu-food-and-drinks-ambiance-sticker-KC_4914.png"/>
    <h1 className="text-5xl text-black dark:text-white">Our Specials Menu</h1>
    <Menu/>
   </div>
   

  <div className="flex flex-row bg-black mt-50 border-2 border-white mr-20 ml-20 justify-center items-center p-10 rounded-2xl">

    <div className="w-[500px] h-[500px]">
      <img src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75"/>
    </div>

     <div className="flex flex-col justify-center items-center space-x-10">
      <h1 className="text-5xl mr-20">Are you Ready to Start<br/> your online Order?</h1>
      <br/>
      <p>Bndulgence diminution so discovered mr apartments.<br/> Are off under folly death wrote cause her way spite.<br/> Plan upon yet way get cold spot its week. Almost do am or limits hearts.<br/> Resolve parties but why she shewing. She sang know now</p>
      <br/>
      <div className="flex flex-row space-x-5 mr-50">
      <Button label="App store" onClick=""/>
      <Button label="Play store"/>
      </div>
    </div>

  </div>







   <div className="flex flex-row mt-20 p-10 ml-20 justify-center space-x-[-100px]">
    <div className="flex flex-col relative">

      <h1 className="text-9xl text-gray-200 object-cover w-[400px]">Restan</h1>
    

     <div>
     <iframe width="700" height="500" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="rounded-xl shadow-lg"
     src="https://www.youtube.com/embed/xPPLbEFbCAo?si=qFmq83ya5CIydbh_" title="YouTube video player" frameborder="0"></iframe>
     </div>

    </div>


  <div className="bg-white w-[500px] h-[500px] p-7 space-x-2.5 space-y-2.5 py-20 relative">
      <h1 className="text-2xl text-black font-semibold">Opening Hours</h1>
      <br/>
      <p className="text-gray-500">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..</p>
      <br/>
      <p className="text-black">Sunday to Tuesday:------------10:00 - 09:00</p>
      <p className="text-black">Wednesday to Thursday:------------11:30 - 10:30</p>
      <p className="text-black">Friday to Saturday:------------12:00 - 11:00</p>
      <br/>
    <div className="flex flex-row">
       <img 
       className="w-[100px] h-[100px] rounded-full"
       src="https://tse4.mm.bing.net/th/id/OIP.y31er6dzhxFNV45Eqc_CtwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"/>
       <div className="flex flex-col">
        <p className="text-gray-500 mt-5">Call Anytime</p>
        <p className="text-black mt-2">+964733-378901</p>
       </div>
    </div>
  </div>

  </div>
  <div>
      <img 
      className="w-[500px] h-[270px] ml-250"
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F4.png&w=3840&q=75"/>
  </div>


  <div className="bg-gray-100 border-1 border-black justify-center items-center flex flex-col h-[700px]">
    <img
     className="w-[150px] h-[150px]"
     src="https://img.freepik.com/premium-vector/master-chef-logo-with-chef-hat-white-background_304830-160.jpg"/>
    <h1 className="text-5xl text-black ">Meet Our Special Chefs</h1>
    <div className="flex flex-wrap justify-center gap-20">


       <div className="flex flex-col items-center transition-all duration-500 group">
        <div className="relative w-[300px] h-[300px] rounded-full border-4 border-gray-400 flex justify-center items-center overflow-hidden transition-all duration-500 group-hover:border-[#7b6332] mt-10">
         <img 
         className="object-cover w-full h-full rounded-full"
         src="https://tse4.mm.bing.net/th/id/OIP.8HgjEqO48qSvVeZY9-7hagHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"/>
         <div className="absolute inset-0 bg-black/50 opacity-0 flex justify-center items-center gap-3 
                    transition-all duration-500 group-hover:opacity-100">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">
            <img 
            className="w-[20px] h-[20px]"
            src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-1024.png"/>
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">
             <img 
            className="w-[20px] h-[20px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhmaAhHYxXIsRegeeTs2omihyyKUY5ROwNw&s"/>
          </button>
         </div>
        </div>
        <div className="bg-[#7b6332] text-white px-6 py-3 mt-6 rounded-md mt-[-100px] relative  text-center w-[230px]">
          <p className="font-bold text-lg">Alexander Petllo</p>
          <p className="font-bold text-md">Assistant Chef</p>
        </div>
       </div>
  


      <div className="group flex flex-col items-center transition-all duration-500">
        <div className="relative w-[300px] h-[300px] rounded-full border-4 border-gray-400 
                  flex justify-center items-center overflow-hidden 
                  transition-all duration-500 group-hover:border-[#7b6332] mt-10">
         <img 
         className="object-cover w-full h-full rounded-full"
         src="https://tse1.explicit.bing.net/th/id/OIP._nwg-eVvRnZ7I2mUeHSUSwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"/>
         <div className="absolute inset-0 bg-black/50 opacity-0 flex justify-center items-center gap-3 
                    transition-all duration-500 group-hover:opacity-100">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">
            <img 
            className="w-[20px] h-[20px]"
            src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-1024.png"/>
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">
             <img 
            className="w-[20px] h-[20px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhmaAhHYxXIsRegeeTs2omihyyKUY5ROwNw&s"/>
          </button>
         </div>
        </div>
        <div className="bg-[#7b6332] text-white px-6 py-3 mt-[-100px] rounded-md text-center w-[230px] relative">
          <p className="font-bold text-lg">Mendia Jusef</p>
          <p className="font-bold text-md">Burger King</p>
        </div>
       </div>
  




        <div className="group flex flex-col items-center transition-all duration-500">
        <div className="relative w-[300px] h-[300px]  rounded-full border-4 border-gray-400 
                  flex justify-center items-center overflow-hidden 
                  transition-all duration-500 group-hover:border-[#7b6332] mt-10">
         <img 
         className="object-cover w-full h-full rounded-full"
         src="https://img.freepik.com/premium-photo/chef-smiling-gourmet-restaurant-kitchen_760443-2235.jpg"/>
         <div className="absolute inset-0 bg-black/50 opacity-0 flex justify-center items-center gap-3 
                    transition-all duration-500 group-hover:opacity-100">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">
            <img 
            className="w-[20px] h-[20px]"
            src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-1024.png"/>
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">
             <img 
            className="w-[20px] h-[20px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhmaAhHYxXIsRegeeTs2omihyyKUY5ROwNw&s"/>
          </button>
         </div>
        </div>
        <div className="bg-[#7b6332] text-white px-6 py-3 mt-[-100px] relative mt-6 rounded-md text-center w-[230px]">
          <p className="font-bold text-lg">Petro William</p>
          <p className="font-bold text-md">Main Chef</p>
        </div>
       </div>
       
    </div>

  </div>




  <div className="flex flex-col bg-white border-2 border-[#7b6332] p-10 text-black justify-center items-center mt-40 h-[700px]">
    <h1 className="text-4xl">Our Latest News & Blog</h1>
    <br/>
    <div className="flex flex-row">
      <div className="relative ">
       <img 
       className="w-[500px] h-[400px]"
       src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75"/>
       <div className="absolute bottom-[-40px] left-0 w-[450px] ml-6 h-[170px] bg-white border-2 border-[#7b6332] p-5 space-x-10 space-y-4">
        <p className="text-sm  hover:text-[#7b6332] text-gray-500">By Md SohagBurger ,Food</p>
        <p className="text-2xl  hover:text-[#7b6332]">Picked up a Brussels burger Sprouts with ham</p>
        <p className="text-sm  hover:text-[#7b6332]">Read more↗</p>
       </div>
      </div>

      <div className="relative ml-10 ">
       <img 
       className="w-[500px] h-[400px]"
       src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75"/>
       <div className="absolute bottom-[-40px] left-0 w-[450px] ml-6  h-[170px] bg-white border-2 border-[#7b6332] p-5 space-x-10 space-y-4">
        <p className="text-sm  hover:text-[#7b6332] text-gray-500">By Md SohagBurger ,Food</p>
        <p className="text-2xl  hover:text-[#7b6332]">This prefabricated passive house is highly sustainable</p>
        <p className="text-sm  hover:text-[#7b6332]">Read more↗</p>
       </div>
      </div>
    
    </div>
  </div>




      <Footer />
      
    </div>
  );
}


