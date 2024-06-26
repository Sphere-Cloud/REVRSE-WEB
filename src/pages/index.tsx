import Navbar from "@/components/navbar";
import Home from "@/components/home";
import Footer from "@/components/footer";
import Faq from "@/components/faq";
import Benefits from "@/components/benefits";
import Prices from "@/components/prices";


export default function Index() {
    return (
        <>
            <Navbar></Navbar>
            <Home></Home>
            <Benefits></Benefits>
            <Prices></Prices>
            <Faq></Faq>
            <Footer></Footer>
        </>
    );
}