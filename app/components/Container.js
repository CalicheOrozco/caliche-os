'use client'
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { createContext } from 'react';
import dynamic from 'next/dynamic'


const DynamicNavbar = dynamic(() => import("../components/Navbar"), {
  loading: () => (
    <div className="animate-pulse flex flex-col gap-4 lg:p-10 h-screen items-center justify-center">
      <div className=" bg-slate-700 h-10 w-10"></div>
      <div className=" bg-slate-700 w-10 h-3"></div>

      <div className=" bg-slate-700 h-10 w-10"></div>
      <div className=" bg-slate-700 w-10 h-3"></div>

      <div className=" bg-slate-700 h-10 w-10"></div>
      <div className=" bg-slate-700 w-10 h-3"></div>

      <div className=" bg-slate-700 h-10 w-10"></div>
      <div className=" bg-slate-700 w-10 h-3"></div>

      <div className=" bg-slate-700 h-10 w-10"></div>
      <div className=" bg-slate-700 w-10 h-3"></div>

      <div className=" bg-slate-700 h-10 w-10"></div>
      <div className=" bg-slate-700 w-10 h-3"></div>
    </div>
  ),
});



// Crea el contexto
export const showNavbarContext = createContext();


function Container({ children }) {
    const pathname = usePathname();
    const [showNavbar, setShowNavbar] = useState(false)
    const [isVisible, setisVisible] = useState(true);

    useEffect(() => {
      if (pathname === "/" ){
        setShowNavbar(true);
    } 
    }, []);

    
  return (
    <showNavbarContext.Provider
      value={{ showNavbar, setShowNavbar, isVisible, setisVisible }}
    >
      <div className="absolute inset-0 z-0 max-h-screen">
        <Image
          src="/background.png"
          alt="Background"
          style={{ objectFit: "cover" }}
          quality={100}
          fill={true}
        />
      </div>
      <div className="relative z-10 flex w-full max-h-screen">
        <div className={`${!showNavbar ? "hidden" : "w-full lg:w-min"}`}>
          <DynamicNavbar />
        </div>
        <div
          className={`flex-grow justify-center ${isVisible ? "" : "hidden"}`}
        >
          {children}
        </div>
      </div>
    </showNavbarContext.Provider>
  );
}

export default Container;
