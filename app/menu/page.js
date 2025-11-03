"use client";
import React, { useRef } from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Menu from "../components/menu1";

export default function MenuPage() {
   
    return (
    <div className="font-serif">
        <Header />
        <div className=" justify-center items-center flex flex-col w-[100%] h-[400px] bg-cover bg-[rgba(0,0,0,0.5)] bg-blend-multiply bg-[url('https://c2.staticflickr.com/4/3778/9611132192_601b130f4f_b.jpg')]">
            <h1 className="text-6xl text-white">Food Menu</h1>
            <br/>
            <p>Home-food-menu</p>
        </div>

        <div className="flex flex-row mt-20">
            <div>
             <img
             className="w-[500px] h-[500px]"
              src="https://img.freepik.com/premium-photo/closeup-photo-tasty-pizza-with-tomatoes-table-restaurant-high-quality_599292-890.jpg"/>
            </div>

            <div>

            </div>
        </div>
        <Footer />
    </div>
    )
}