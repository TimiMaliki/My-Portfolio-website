import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";


const MainLayout = () => {
    return ( 
        <>
        <Navbar/>
        <Outlet/>
        <ScrollRestoration/>
        <Footer/>
        </>
     );
}
 
export default MainLayout;