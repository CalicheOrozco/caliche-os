"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import myData from "@/constants/data";
import { useContext } from 'react';
import { showNavbarContext } from './Container'; // Asegúrate de importar showNavbarContext correctamente desde el archivo del componente Container
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const {
    setisVisible,
    setShowNavbar,
  } = useContext(showNavbarContext);

  const handleClick = (url) => {

    if (pathname === url ){
      setShowNavbar(false);
      setisVisible(true);
    }
    
  };



  return (
    <nav className={`min-h-screen flex justify-center items-center lg:justify-start `}>
      
      <ul className="flex flex-col gap-4 lg:p-10">
        {myData.navmenu.map((item, index) => (
          <li  key={`navbar-item-${index}`} >
            <Link href={item.url} onClick={() =>{handleClick(item.url)}}>
              <div
                className={`flex flex-col items-center p-2 rounded-md ${
                  pathname.startsWith(`${item.url}`)
                    ? "lg:bg-[#010081]"
                    : "lg:hover:bg-[#010081]"
                }`}
              >
                <Image src={item.icon} alt={item.name} width={50} height={50} priority />
                <span>{item.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
