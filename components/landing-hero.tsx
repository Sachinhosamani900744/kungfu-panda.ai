"use client";
import Image from "next/image"
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import { Button } from "@/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();
  
  useEffect(() => {
    AOS.init();
  }, []);
  
  

  return (

    <div className="hero-container">

  
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
      <div className="h-full p-20 flex flex-col items-center justify-center">
  
      
      <div className="relative h-72 w-72">
        <Image data-aos="zoom-in" src="/empty.png" fill alt="Empty" /><br></br>
        
      </div>
      {/*<div className="relative h-72 w-72">
        <Image src="" fill alt="Empty" /><br></br>
        
  </div>*/}
      </div>
      
     

      
        <h2>The Best AI Tool for</h2>
        
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Conversation.",
                "Image Generation.",
                "Music Generation.",
                "Code Generation.",
                "Video Generation",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content using AI 10x faster.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Start Generating For Free 
          </Button>
        </Link>
      </div>
    
      <div className="text-zinc-400 text-xs md:text-sm font-normal"></div>

        {/*<div className="h-full p-20 flex flex-inblock items-start gap-40 justify-start">
    
        <div className="relative h-40 w-40" >
        <Image src="/chat1.png" fill alt="Empty" />
        <p className="text-xs text-6xl text-center absolute bottom-4 w-full"></p>
        </div> 
    
      <div className="relative h-40 w-40">
        <Image src="/image.png" fill alt="Empty" />
      </div>

      <div className="relative h-40 w-40">
        <Image src="/audio .png" fill alt="Empty" />
      </div>

      <div className="relative h-40 w-40">
        <Image src="/video.png" fill alt="Empty" />
      </div>

      </div>


      <div className="h-full p-20 flex flex-inblock items-start gap-60 justify-center">
      <div className="relative h-40 w-40">
        <Image src="/coding.png" fill alt="Empty" /></div> 
    
      <div className="relative h-40 w-40">
        <Image src="/speech.png" fill alt="Empty" />
      </div>
      <div className="relative h-40 w-40">
        <Image src="/chat.png" fill alt="Empty" />
      </div>

    
      </div>*/}
       </div>


       
     {/*} <div className="text-sm md:text-xl font-light text-zinc-400">
        Create content using our AI Models
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="secondary" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Sign-up For Free 
          </Button>
          </Link>
      </div>*/}
      
    </div>
    </div>
  );
};