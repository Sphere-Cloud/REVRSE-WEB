import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Raleway } from "next/font/google";
import Link from "next/link";

const ralewayFont = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FDFDFC] shadow-md">
      <div className="flex justify-between items-center py-4 px-2 md:px-0 max-w-[1120px] m-auto max-h-[10vh]">
        <Link href="/">
          <img src="revrse.svg" alt="Logo" className="w-1/3 md:hidden h-12" />
        </Link>
        

        <button className="md:hidden text-[#FF5022] focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <GiHamburgerMenu />
        </button>

        {/* Menú para pantallas grandes */}
        <div className={`hidden md:flex  w-full items-center ${ralewayFont.className} py-3 border-b-[1px] border-[#CDCDCD]`}>

            
            <Link href="/">
              <img src="revrse.svg" alt="Logo" className="h-10"/>
            </Link>
            
            <ul className='w-2/3 flex gap-6 px-2 justify-end'>
                <li>
                    <Link href="/" className={`inline text-[#101010] font-medium text-lg`}>Home</Link>
                </li>
                <li>
                    <Link href="/precios" className={`inline text-[#101010] font-medium text-lg`}>Precios</Link>
                </li>
            </ul>

            <div className="hiddent md:flex items-center justify-start gap-6 w-1/3 px-4">
                
                <div className="border-[#DDDDDD] border-[0.5px] rounded-md flex justify-center items-center">
                  <Link href="#" target="blank" className='py-1 px-3 rounded-md text-[#101010] font-semibold bg-[#F2F2F2] text-center text-lg'>Comprar</Link>
                </div>
                

                <div className="border-[#FF5022] border-[0.5px] rounded-md flex justify-center items-center">
                  <div className="border-white border-[0.5px] rounded-md flex justify-center items-center">
                    <Link href="#" target="blank" className=' py-1 px-3 rounded-md text-white font-semibold bg-[#FF5022] text-center text-lg'>Descarga</Link>
                  </div>
                </div>
            </div>
        </div>
        
      </div>

      {/* Menú desplegable para dispositivos móviles */}
      {isMenuOpen && (
        <div className={`md:hidden bg-[#FF5022] max-h-full h-[90vh] ${ralewayFont.className}`}>
          <ul className="flex flex-col items-center gap-4 p-4 bg-[#FF5022] border-t border-gray-300">
            <li>
                <Link href="#" className="block text-white font-semibold">
                    Home
                </Link>
            </li>
            <li>
                <Link href="#" className="block text-white font-semibold">
                    Precios
                </Link>
            </li>
            <li>
                <Link href="#" className="border-white border-2 py-2 px-6 rounded-md text-[#FF5022] font-semibold bg-white text-center">
                    COMPRAR AHORA
                </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
