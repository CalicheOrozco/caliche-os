'use client'
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Navbar from "./Navbar";
import { createContext } from 'react';



// Crea el contexto
export const showNavbarContext = createContext();

function Container({ children }) {
    const pathname = usePathname();
    const [showNavbar, setShowNavbar] = useState(true)
    const [isVisible, setisVisible] = useState(true);

    useEffect(() => {
        if (window.innerWidth < 1024) {
            if (pathname != "/" ){
                setShowNavbar(false);
            }
            
        } else {
            setShowNavbar(true);
        }
    }, []);

    
  return (
    <showNavbarContext.Provider value={{ showNavbar, setShowNavbar, isVisible, setisVisible }}>
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="Background"
          style={{objectFit: "cover"}}	
          quality={100}
          fill={true}
          className=""
        />
        
      </div>
      <div className="relative z-10 flex w-full max-h-screen">
        <div className={`${ !showNavbar ? "hidden" : "w-full lg:w-min" 
              }`}>
            <Navbar />
        </div>
        
        <div className={`flex-grow justify-center ${isVisible ? "": "hidden"}`}>{children}</div>
      </div>
      </showNavbarContext.Provider>
  );
}

export default Container;
