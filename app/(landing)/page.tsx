"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";
import { Footer } from "@/components/footer";
import SocialFlow from "@/components/social media";
import VideoPlayer from "@/components/video";
import { LandingContents } from "@/components/image";
import ContactForm from "@/components/contact form";
import ProgramHighlights from "@/components/aitools";

const LandingPage = () => {

  useEffect(() => {
    AOS.init({
      // Optional: Customize AOS settings here
      duration: 3000, // Animation duration in milliseconds
      easing: 'ease-out-quad', // Animation easing function
      // ... other AOS options
    });
  }, []);


  
  return ( 
    <div className="h-full  ">
      
      <LandingNavbar  /> 

     <LandingHero data-aos="fade-up" /><br></br><br></br>
       {/*} <VideoPlayer data-aos="fade-up" /><br></br><br></br>
        <LandingContent data-aos="fade-left" />
        <ProgramHighlights data-aos="fade-down" />
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      
  <LandingContents data-aos="fade-right" /><br></br><br></br><br></br><br></br>
  
  <ContactForm data-aos="fade-up" /><br></br><br></br>

    <SocialFlow data-aos="fade-up" />
  <Footer />*/}


    </div>
    
   );
}
 
export default LandingPage;


