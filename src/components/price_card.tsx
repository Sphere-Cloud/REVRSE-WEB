function PriceCard(){
    return (
        <div className="flex flex-col items-center justify-evenly rounded-md bg-stone-900 py-8">
            <h1>Price Card</h1>
            <p>Price Card Component</p>

            <a href="#" className="rounded bg-sky-600 py-3 text-white font-bold w-1/2 text-center">Comprar</a>
            <a href="#" className="font-bold text-sky-600">Contactar a ventas</a>
        </div>
    );
}

export default PriceCard;