
function Benefits() {
    return (
        <section className="flex flex-col font-sans items-center bg-white">
            <div className="grid grid-cols-3 w-full px-10 py-12">
                <div className="flex justify-start items-center flex-col gap-1">
                    <div className="w-7/12">
                        <h1 className="text-black font-bold text-4xl font-sans whitespace-pre-line">
                            Mejora la
                            administración
                            de tu negocio
                        </h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-6 w-full px-10 py-12 text-black">

                <div className="col-start-1 col-end-4">
                    <div className="flex justify-start items-center flex-col gap-1 h-full">
                        <div className="w-9/12 h-full">

                            <div className="px-2 w-full">
                                <h1 className="font-bold text-gray-400">TU META COMERCIAL</h1>
                                <hr />
                            </div>

                            <div className="h-full flex flex-col justify-evenly font-bold text-2xl">
                                
                                <div className="px-2 w-full flex gap-10 py-5">
                                    <p>1</p>
                                    <p>Gestión Eficiente de Ventas</p>
                                </div>  

                                <div className="px-2 w-full flex gap-10 py-5">
                                    <p>2</p>
                                    <p>Control de Inventario</p>
                                </div>    

                                <div className="px-2 w-full flex gap-10 py-5">
                                    <p>3</p>
                                    <p>Facilidad de Uso</p>
                                </div>        

                                <div className="px-2 w-full flex gap-10 py-5">
                                    <p>4</p>
                                    <p>Soporte tecníco</p>
                                </div>

                            </div>              
                            
                        </div>
                    </div>
                </div>

                <div className="col-start-4 col-end-7">
                    <div className="flex justify-start items-center flex-col gap-1 h-full">
                        <div className="w-9/12 h-full">

                            <div className="px-2 w-full">
                                <h1 className="font-bold text-gray-400">COMO LOGRARLA CON SPHERE</h1>
                                <hr />
                            </div>

                            <div className="flex flex-col justify-between h-full font-bold text-gray-800">
                            
                                <div className="px-2 w-full py-5">
                                    <p>Optimiza el proceso de ventas con <span className="text-sky-600">funciones intuitivas</span> para <span className="text-sky-600">crear pedidos</span> y gestionar transacciones de <span className="text-sky-600">forma rapida</span>.</p>
                                </div> 

                                <div className="px-2 w-full py-5">
                                    <p>Mantén un<span className="text-sky-600"> seguimiento preciso</span> del inventario en tiempo real para evitar <span className="text-sky-600">perdidas</span> y optimizar la reposición de productos.</p>
                                </div> 

                                <div className="px-2 w-full py-5">
                                    <p>Interfaz <span className="text-sky-600">intuitiva</span> y <span className="text-sky-600">amigable</span> que reduce la curva de aprendizaje y permite a tu equipo empezar a <span className="text-sky-600">usarlo rápidamente</span>.</p>
                                </div> 

                                <div className="px-2 w-full py-5">
                                    <p>Acceso a <span className="text-sky-600">soporte técnico dedicado</span> para resolver problemas y recibir <span className="text-sky-600">asistencia rápida</span> en caso de necesidad.</p>
                                </div>
                            
                            </div> 
                            
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Benefits;