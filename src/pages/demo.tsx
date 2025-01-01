import React from 'react';
import { useState } from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Raleway, Hanken_Grotesk } from "next/font/google";

const ralewayFont = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const hostGroteskFont = Hanken_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
  });

function Demo() {
    return(
        <>  
            <Navbar></Navbar>
            <section className={`w-full bg-[#FDFDFC] text-gray-800 h-auto ${hostGroteskFont.className}`}>
                <div className="w-full max-w-[1120px] flex flex-col md:flex-row items-center justify-center mx-auto p-6">
                    <form action="" className="w-full md:w-1/2 bg-[#FFFDFB] p-6 rounded-lg shadow-lg border-[2px] border-[#ff7350]">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Contáctanos</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-[#FF5022] focus:ring-white"
                        placeholder="Escribe tu nombre"
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Telefono</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-[#FF5022] focus:ring-white"
                        placeholder="Escribe tu nombre"
                        required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Correo Electrónico</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-[#FF5022] focus:ring-white"
                        placeholder="Escribe tu correo"
                        required
                        />
                    </div>
                    <div className="border-[#101010] border-[0.5px] rounded-md flex justify-center items-center w-full">
                        <div className="border-white border-[0.5px] rounded-md flex justify-center items-center w-full">
                            <button type='submit' className='w-full py-1 px-3 rounded-md text-white font-normal bg-[#101010] text-center text-lg'>
                            Enviar
                            </button>
                        </div>
                    </div>
                    
                    </form>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}

export default Demo;