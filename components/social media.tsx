"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFlow() {
    const isMobile = useRef(window.innerWidth <= 768); // Initial check
  
    useEffect(() => {
      const handleResize = () => {
        isMobile.current = window.innerWidth <= 768;
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    const [showIcons, setShowIcons] = useState(false); // Optional state for manual control
  
    const toggleIcons = () => setShowIcons(!showIcons);


  return (
    <div>
      
      <p className="social-container">
        <a
          href=""
          className="github social"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>
        <a
          href=""
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
        <a
          href=""
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
        <a href=""
         className="linked-in social">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>
        <a href=""
         className="whatsapp social">
          <FontAwesomeIcon icon={faWhatsapp} size="3x" />
        </a>
        
        <a href=""
         className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
      </p>
    </div>
    
    
  );
}
