import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";


export default function Main() {
    return (

        <div>
            <Header />

            <main className={`  max-w-screen  bg-gradient-to-r from-[#993111] to-[#FF521C]`}>

                <Outlet />
            </main>
            <Footer/>
            {/* <ScrollToTopButton/> */}
        </div>


    );
}
