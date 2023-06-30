"use client";
import React, {  useContext  } from "react";
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { VscChromeMaximize, VscChromeRestore } from "react-icons/vsc";
import { showNavbarContext } from './Container'; // Asegúrate de importar showNavbarContext correctamente desde el archivo del componente Container



const Window = ({ title, children, noPadding, backgroundColor }) => {
  
  const {
    showNavbar,
    setShowNavbar,
    isVisible,
    setisVisible,
  } = useContext(showNavbarContext);

  const handleClose = () => {
    setisVisible(false);
    setShowNavbar(true);
  };

  const handleMaximize = () => {
    if (window.innerWidth > 1024) {
    setShowNavbar(!showNavbar);
    }
  };

  return (

      <div
        className={`window  rounded-lg shadow-lg m-0 h-[100vh] ${showNavbar ? ` lg:m-5 lg:h-[90vh]` : ""} 
        ${
          backgroundColor ? `${backgroundColor}` : "bg-white"
        }`}
      >
        <div className="window-title-bar flex items-center justify-between bg-blue-800 rounded-t-lg px-3">
          <div className="window-title text-white font-bold py-2">{title}</div>
          <div className="window-buttons flex space-x-1 h-4">
            <AiOutlineMinus
              className="window-button window-button-close h-6 w-8 hover:bg-blue-600"
              onClick={() => {
                handleClose();
              }}
            />

            {showNavbar ? <VscChromeMaximize className="window-button window-button-close h-6 w-8 hover:bg-blue-600" onClick={() => {
                handleMaximize();
              }} />
            :
            <VscChromeRestore className="window-button window-button-close h-6 w-8 hover:bg-blue-600" onClick={() => {
                handleMaximize();
              }} />}

            <AiOutlineClose
              className="window-button window-button-close h-6 w-8 hover:bg-red-400"
              onClick={() => {
                handleClose();
              }}
            />
          </div>
        </div>
        <div
          className={`window-content text-black overflow-y-auto h-[90%] ${
            noPadding ? "" : "p-4"
          }`}
        >
          {children}
        </div>
      </div>
    
  );
};

export default Window;
