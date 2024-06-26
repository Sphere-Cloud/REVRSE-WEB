export default function Footer() {
    return (
        <footer className="flex font-sans justify-center items-center flex-col">
            <div className="grid grid-cols-3 w-full px-10 pt-14 pb-24">
                <div className="flex justify-start items-center flex-col gap-1">
                    <div className="w-7/12">
                        <h1 className="text-gray-400 font-semibold">Productos</h1>
                    </div>
                    <hr className="w-7/12" />
                    <div className="w-7/12">
                        <ul>
                            <li className="font-semibold"><a href="#">Punto de Venta</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-start items-center flex-col gap-1">
                    <div className="w-7/12">
                        <h1 className="text-gray-400 font-semibold">Tipos de Negocio</h1>
                    </div>
                    <hr className="w-7/12" />
                    <div className="w-7/12">
                        <ul>
                            <li className="font-semibold"><a href="#">Tiendas</a></li>
                            <li className="font-semibold"><a href="#">Belleza</a></li>
                            <li className="font-semibold"><a href="#">Restaurantes</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-start items-center flex-col gap-1">
                    <div className="w-7/12">
                        <h1 className="text-gray-400 font-semibold">Contacto</h1>
                    </div>
                    <hr className="w-7/12" />
                    <div className="w-7/12">
                        <ul>
                            <li className="font-semibold"><a href="tel:+527714834386">Atención al cliente: 7714834386</a></li>
                            <li className="font-semibold"><a href="tel:+527714834386">Ventas: 7714834386</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 w-full p-5 px-10">
                <div className="flex justify-start items-center flex-col gap-1">
                    <div className="w-7/12">
                        <p className="text-gray-400">© 2024 Sphere.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}