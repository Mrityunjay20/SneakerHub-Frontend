import { useState } from "react";
import LoginCard from "../components/LoginCard";
import TextingTextContent from "../components/TextingText";
import "./Auth.css";

export default function AuthPage(){
    const [signup,setsignup]= useState(true);

    function flipsignup(){
        setsignup((prev) => !prev);
    }

    return(<>
        <div id="body">
            <LoginCard signupstatus={signup} singupfunction={flipsignup}/>
        </div>
    </>)
}