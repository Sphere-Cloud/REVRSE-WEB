import Question from "./question";

export default function Faq() {
    return (
        <section className="flex flex-col font-sans items-center bg-white">
            <div className="grid grid-cols-3 w-full px-10 py-12">
                <div className="flex justify-start items-center flex-col gap-1">
                    <div className="w-7/12">
                        <h1 className="text-black font-bold text-4xl">
                            Preguntas frecuentes
                        </h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-6 w-full px-10 py-12 text-black">
                <div className="col-start-1 col-end-4">
                    <div className="flex justify-start items-center flex-col gap-1">
                        <div className="w-9/12">
                            <div className="px-2 w-full">
                                <Question title="¿Cómo puedo pagar?" content="Puedes pagar con tarjeta de crédito, débito o efectivo." />
                            </div>
                            <div className="px-2 w-full">
                                <Question title="¿Cómo puedo pagar?" content="Puedes pagar con tarjeta de crédito, débito o efectivo." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}