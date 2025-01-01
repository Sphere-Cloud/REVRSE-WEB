import react from 'react';
import { useState } from 'react';
import { MdArrowOutward } from "react-icons/md";
import { Raleway, Hanken_Grotesk } from "next/font/google";

const ralewayFont = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const hostGroteskFont = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home(){
    return(
        <section className={`flex font-sans items-center bg-[#FDFDFC] w-full h-fit md:h-[90vh] ${hostGroteskFont.className}`}>
            <div className="max-w-[1120px] m-auto flex flex-col md:flex-row justify-center items-center px-4">

                <div className="w-full md:w-6/12 flex justify-center md:justify-end items-center flex-col">
                    <span className='pt-5 md:py-0 justify-self-start self-start text-[#FF5022]'><strong>SOFTWARE PUNTO DE VENTA</strong></span>
                    <div className="w-full flex flex-col gap-6 py-12 pt-7 md:pt-16">
                        <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl text-[#101010] text-left leading-tight">Gestiona con<br /> <span className='text-[#FF5022]'>presición</span> <br /> vende con <span className='text-[#FF5022]'>confianza</span></h1>
                        <p className="text-base md:text-lg text-[#101010] text-left w-full md:w-4/5">Lleva el control financiero de tu negocio al siguiente nivel con nuestro sistema de punto de venta. Simplifica la gestión de tus números y toma decisiones más inteligentes.</p>

                        <div className="border-[#FF5022] border-[0.5px] rounded-md flex justify-center items-center w-fit">
                            <div className="border-white border-[0.5px] rounded-md flex justify-center items-center">
                                <a href="#" target="blank" className=' py-1 px-3 rounded-md text-white font-semibold bg-[#FF5022] text-center text-lg flex items-center gap-5'>DEMO <MdArrowOutward /></a>
                            </div>
                        </div>

                        {/* <div className="w-full flex justify-start gap-5 items-center">
                            <p>Tipo de tiendas &rarr;</p>
                            <button type="button" className="font-bold border-solid bg-[#FF5022] p-3 px-6 border-2 border-[#FF5022] rounded-3xl text-white">Tiendas</button>
                            <button type="button" disabled className="font-bold border-solid bg-[#FF5022] p-3 px-6 border-2 border-[#FF5022] rounded-3xl text-white">Belleza</button>
                            <button type="button" disabled className="font-bold border-solid bg-[#FF5022] p-3 px-6 border-2 border-[#FF5022] rounded-3xl text-white">Restaurantes</button>
                        </div> */}
                    </div>

                </div>

                <div className="w-full md:w-6/12 flex justify-end items-center">
                    <img src="https://placehold.co/500x500" alt="imagen"  className="max-w-full h-auto"/>
                </div>
            </div>
        </section>
    );
}