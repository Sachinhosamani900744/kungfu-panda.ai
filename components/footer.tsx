"use client";
 
import * as React from 'react';
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
const font = Montserrat({ weight: '600', subsets: ['latin'] });

interface IProps {
}

export class Footer extends React.Component<IProps, {}> {
    render() {
        return (
            <footer className='footer' >

                
                <div className='container'>
                <div className="p-4 bg-transparent flex items-center justify-center">
                <div className="flex items-center">
        <div className="relative h-10 w-12 mr-2">
          <Image fill alt="Logo" src="/logo.png" /></div>
          <div className="heading-container">
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Kungfu Panda *
        </h1>
        <h6 style={{ fontSize: '16px', color: '#f2ee6d' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Leading with AI excellence.</h6>
        </div>
        </div></div><br></br>
                
        <div className="text-center text-1xl text-white font-extrabold mb-10"> <h3>© copyright @ 2024 by &nbsp;<span>K</span>ungfu <span>P</span>anda *&nbsp;| all rights reserved!</h3></div><br></br>
            
                </div>
            </footer>
        )
    }
}