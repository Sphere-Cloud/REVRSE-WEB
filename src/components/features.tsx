import ParallaxImage from "./parrallax_image";
import { Raleway, Hanken_Grotesk } from "next/font/google";

const ralewayFont = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const hostGroteskFont = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Features() {
    return(
        <>
            <section className={`w-full bg-white text-black h-fit overflow-hidden relative ${hostGroteskFont.className}`}>
                <div className="max-w-[1120px] m-auto flex flex-col items-center py-12 ">
                    <h2 className="text-4xl text-center mb-6">Funcionalidades que hacen la diferencia</h2>
                    <p className="text-center max-w-3xl text-lg mb-8">
                        Descubre las herramientas esenciales que te ayudarán a gestionar, analizar y hacer crecer tu negocio de forma más eficiente.
                    </p>
                    <div className="grid grid-cols-1 md:grid-rows-3 gap-8 max-w-6xl">
                        {/* Funcionalidad 1 */}
                        {/* <div className="flex flex-col items-center text-center md:flex-row md:items-start md:justify-between gap-8"> */}
                        <ParallaxImage
                            start={"normal"}
                            src="https://via.placeholder.com/500x300"
                            title="Gestión de Ventas"
                            description="Procesa ventas de forma rápida y sencilla."
                        />
                        {/* Funcionalidad 2 */}
                        <ParallaxImage
                            start={"reverse"}
                            src="https://via.placeholder.com/500x300"
                            title="Gestión de Inventarios"
                            description="Monitorea tus existencias en tiempo real y evita faltantes."
                        />
                        {/* Funcionalidad 3 */}
                        <ParallaxImage
                            start={"normal"}
                            src="https://via.placeholder.com/500x300"
                            title="Gestión de Gastos"
                            description="Registra y analiza tus egresos para optimizar los recursos de tu negocio."
                        />
                        {/* Agrega más funcionalidades según sea necesario */}
                    </div>
                </div>
            </section>
        </>
    );
}