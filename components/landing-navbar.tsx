"use client";

import { Montserrat } from "next/font/google";
import React, { useState, useEffect } from 'react';

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";


import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });


export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between sticky top-0 z-10"
    style={{position:"fixed",top: 0, left: 0, width: '100%', overflow:"hidden",backgroundColor: "#140b33"}}>
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <div className="heading-container">
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
           Panda.ai 
        </h1>
        <h6 style={{ fontSize: '12px', color: '#f2ee6d' }}></h6>
       </div>
       </Link>

       
       {/*} <div className="navigate">
        <Link href="" className="text-white hover:text-red-300 font-medium">Home
        </Link>
        <Link href=""
           className="text-white hover:text-red-300 font-medium">About
        </Link>
        <Link href=""
           className="text-white hover:text-red-300 font-medium">Services
        </Link>
        <Link href=""
           className="text-white hover:text-red-300 font-medium">Team
        </Link>
        <Link href=""
           className="text-white hover:text-red-300 font-medium">Contact us
        </Link>
  </div> */}
        
    
      <div className="flex items-center gap-x-2 ">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
          Get Started
          </Button>
        </Link>
      </div>

      
    </nav>
    
  )
  
}
