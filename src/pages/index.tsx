import Navbar from "@/components/navbar";
import Home from "@/components/home";
import Footer from "@/components/footer";
import Faq from "@/components/faq";
import Benefits from "@/components/benefits";
import Features from "@/components/features";
import Demo from "@/components/demo";


export default function Index() {
    return (
        <>
            <Navbar></Navbar>
            <Home></Home>
            <Features></Features>
            {/*<Benefits></Benefits>
            <Prices></Prices>
            <Faq></Faq> */}
            <Demo></Demo>
            <Footer></Footer>
        </>
    );
}