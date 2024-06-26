export default function Home(){
    return(
        <section className="flex font-sans items-center">
            <div className="w-6/12 flex justify-end items-center">

                <div className="w-5/6 flex flex-col justify-between gap-10 py-12 pt-16">
                    <h1 className="text-6xl">Impulsa el <br /> rendimiento de <br /> tu empresa</h1>
                    <p className="w-1/2">Gestiona tu negocio de manera inteligente, incrementa tu eficiencia automatizando tareas y maximiza tus ingresos con nuestro sistema de punto de venta, la elección confiable de millones de comercios.</p>

                    <div className="w-full flex justify-start gap-5">
                        <button type="button" className="text-sky-600 border-sky-600 border-2 border-solid bg-transparent p-3 px-10 rounded font-bold">Comienza</button>
                        <button type="button" className="border-sky-600 border-2 border-solid bg-sky-600 p-3 px-10 rounded font-bold">Contacta a ventas</button>
                    </div>

                    <div className="w-full flex justify-start gap-5 items-center">
                        <p>Tipo de tiendas &rarr;</p>
                        <button type="button" className="font-bold border-solid bg-white p-3 px-6 border-2 border-white rounded-3xl text-black">Tiendas</button>
                        <button type="button" disabled className="font-bold border-solid bg-white p-3 px-6 border-2 border-white rounded-3xl text-black">Belleza</button>
                        <button type="button" disabled className="font-bold border-solid bg-white p-3 px-6 border-2 border-white rounded-3xl text-black">Restaurantes</button>
                    </div>
                </div>

            </div>

            <div>
                <img src="#" alt="imagen" />
            </div>
        </section>
    );
}