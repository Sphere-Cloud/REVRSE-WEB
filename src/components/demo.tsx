import { Raleway, Hanken_Grotesk } from "next/font/google";
import Link from "next/link";

const ralewayFont = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const hankenGroteskFont = Hanken_Grotesk({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});



export default function Demo() {

    return (
        
        <section className={`w-full bg-[#FDFDFC] text-white h-auto md:h-[50vh] ${hankenGroteskFont.className} flex items-center justify-center `}>
            <div className="bg-[#FF6909] max-w-[1120px] mx-auto flex flex-col items-center justify-center p-4 text-center rounded-xl w-full m-8 md:m-0">
                <div className=" bg-[#FF5703] w-full h-full rounded-xl">
                    <div className="flex flex-col justify-center items-center gap-2 w-full p-10 md:px-0 ">
                        <div className="flex flex-col gap-1 w-full">
                            <h2 className={`text-4xl md:text-5xl font-semibold mb-8 text-center  ${ralewayFont.className}`}>
                                Descubre cómo nuestro sistema puede <br className="hidden md:block" /> transformar tu negocio.
                            </h2>
                            <span className={`text-lg font-semibold mb-6 ${ralewayFont.className}`}>¡Quiero agendar una demo!</span>
                        </div>

                        <div className="flex flex-col gap-4 w-full md:w-1/2 justify-center items-center">
                            
                            <div className="border-[#101010] border-[0.5px] rounded-md flex justify-center items-center w-fit">
                                <div className="border-white border-[0.5px] rounded-md flex justify-center items-center">
                                    <Link href="/demo" target="blank" className=' py-1 px-3 rounded-md text-white font-normal bg-[#101010] text-center text-lg'>Agendar demo</Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );

}