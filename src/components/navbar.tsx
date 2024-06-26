export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-5 font-sans">
            <div className="flex items-center justify-between w-6/12">
                <img src="sphere.svg" alt="Logo" />
                <a href="#" className="no-underline inline">Home</a>
                <a href="#" className="no-underline inline">Tiendas</a>
                <a href="#" className="no-underline inline">Precios</a>
            </div>
            <div className="flex items-center justify-center">
                <a href="#" target="blank">Demo</a>
            </div>
        </nav>
    );
}