import { Outlet } from "react-router-dom";
import { SimpleFooter } from "../../components/Footer";
import { NavbarWithSearch } from "../../components/Navbar";

export default function RootLayout(){
    return(
    <div className="bg-black absolute w-[100%] h-screen">
        <div className="mb-3 z-50"><NavbarWithSearch/></div>
        <Outlet/>
        <SimpleFooter />
    </div>)
}