import PriceCard from "./price_card";

function Prices(){
    return (
        <section>
            <h1>Prices</h1>
            <div className="grid grid-cols-3 px-48">
                <PriceCard></PriceCard>
            </div>
        </section>
    )
}

export default Prices;