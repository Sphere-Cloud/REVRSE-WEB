import { Raleway } from "next/font/google";

const ralewayFont = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Footer() {
    return (
        <footer className={`bg-[#101010] flex font-sans justify-center items-center flex-col w-full pb-10 ${ralewayFont.className}`}>
            <div className="max-w-[1120px] m-auto w-full">
                <div className="flex justify-between w-full pt-4 pb-14 md:pb-24 flex-col md:flex-row">

                    <div className="flex flex-col gap-5 w-full md:w-1/3 justify-center items-start px-4 md:px-0">
                        <img src="revrse.svg" alt="Logo" className="w-1/3 h-20"/>
                        <span className="text-xs">Gestiona con precisión, vende con confianza.</span>
                    </div>

                    <div className="flex gap-5 w-full md:w-2/3 px-4 md:px-0 py-10 justify-start md:justify-end items-start">
                        <div className="flex gap-5 text-md">
                            <ul>
                                <li className="text-xl font-semibold">Producto</li>
                                <li>Funcionalidades</li>
                                <li>Precios</li>
                                <li>Ayuda</li>
                            </ul>
                        </div>

                        <div className="flex gap-5 text-md">
                            <ul>
                                <li className="text-xl font-semibold">Compañia</li>
                                <li>Formas de pago</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="flex justify-between w-full py-3 border-t-[1px] border-gray-500 flex-col items-center gap-3 md:flex-row">
                    <div>
                        <p className="text-gray-400">Copyright© 2024 Revrse Inc.</p> 
                    </div>

                    <div className="flex gap-5">
                        <p className="text-gray-400">Terminos</p>
                        <div className="border-r-[1px] border-gray-500"></div>
                        <p className="text-gray-400">Privacidad</p>
                        <div className="border-r-[1px] border-gray-500"></div>
                        <p className="text-gray-400">Politica de Cookies</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}