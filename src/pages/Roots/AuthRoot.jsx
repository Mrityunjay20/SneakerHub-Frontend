import { Outlet } from "react-router-dom";
import { NavbarWithSearch } from "../../components/Navbar";

export default function AuthLayout(){
    return(
    <div className="bg-black absolute w-[100%] h-screen">
        <Outlet/>
    </div>)
}