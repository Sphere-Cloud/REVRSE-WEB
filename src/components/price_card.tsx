import { FaCheckCircle } from "react-icons/fa";
import { Raleway, Hanken_Grotesk } from "next/font/google";

const ralewayFont = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function PriceCard({ title, price, features, description }) {
    return (
        <div className="max-w-[500px] w-11/12 md:w-full m-3 md:m-0 rounded-xl shadow-lg border-[#DDDDDD] border-[2px] bg-[#FFFDFB]">
            <div className="w-full flex flex-col px-6 py-3">
                <h1 className="text-[#101010] text-xl pb-4"><strong className={`${ralewayFont.className}`}>Plan {title}</strong></h1>
                <p className="text-[#101010] text-4xl"><strong>${price}</strong></p>
            </div>
            <div className="w-full flex flex-col px-6">
                <span className="text-[#101010]">{description}</span>
            </div>
            <div className="w-full flex flex-col px-6 py-3 justify-center items-center">
                <link href="#" className="bg-[#FF5022] text-white text-lg font-bold py-3 px-4 rounded-full w-full text-center">
                    Empieza Ahora
                </link>
            </div>

            <div className="w-full flex flex-row px-6 py-3 justify-center items-center gap-4">
                <span className="flex-1 h-px bg-[#000] border-[1px] w-4">
                </span> <span>14 Dias de Prueba</span> 
                <span className="flex-1 h-px bg-[#000] border-[1px] w-4"></span>
            </div>
            
            <div className="w-full flex flex-col p-6 ">

                <ul className="text-left flex flex-col gap-3 border-[#DDDDDD] border-[2px] rounded-xl p-5">
                    {
                        features.map((feature, index) => {
                            return (
                                <li key={index} className="flex items-center gap-3 text-[#FF5022]">
                                    <FaCheckCircle />
                                    <strong className="text-black">{feature}</strong>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default PriceCard;