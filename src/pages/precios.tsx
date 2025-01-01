import PriceCard from "@/components/price_card";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import { Raleway, Hanken_Grotesk } from "next/font/google";

const ralewayFont = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const hankenGroteskFont = Hanken_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function Prices() {

    return(
        <>
            <Navbar></Navbar>
            <section className={`w-full h-auto bg-[#FDFDFC] text-black ${hankenGroteskFont.className}`}>
                <div className="max-w-[1120px] mx-auto py-12 flex flex-col items-center justify-center">
                    <div className="border-b-[1px] border-[#CDCDCD] w-full mb-10">
                        <h1 className="text-5xl font-bold text-center py-4">Planes</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1120px] place-items-center">
                        <div></div>
                        <PriceCard
                            title={"Basico"}
                            price={"100/mes"}
                            features={
                                [
                                    "Gestión de inventario",
                                    "Gestión de ventas",
                                    "Gestión de compras",
                                    "Arqueo de caja",
                                    "Impresión de tickets",
                                    "Control de usuarios",
                                    "Soporte 24/7"
                                ]
                            }
                            description={"Ideal para pequeños negocios"}
                        />
                        <div></div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );

}