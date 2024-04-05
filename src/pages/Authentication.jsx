import { useEffect, useState } from "react";
import LoginCard from "../components/LoginCard";
import axios from 'axios';
import "./Auth.css";
import LoginStatusCard from "../components/LoginStatus";
import { redirect } from "react-router-dom";
import { Navbar } from "@material-tailwind/react";



// export default function AuthPage(){
//     const [signup,setsignup]= useState(true);
//     const [testState, setTestState] = useState("hola amigo");
//     const [showComponent, setShowComponent] = useState(false);

//     const sendDataSignup = async (objectBody) => {
//         try {
//             const response = await axios.post('http://localhost:8080/auth/signup', 
//                 objectBody,  // Correctly passing objectBody as the data parameter
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Access-Control-Allow-Origin': 'http://localhost:5173' // Update with your frontend URL
//                     }
//                 }
//             );
//             return (response.data); // Log the response from the server
//         } catch (error) {
//             console.error('Error sending data:', error);
//         }
//     };
//     const sendDataSignin = async (objectBody) => {
//         try {
//             const response = await axios.post('http://localhost:8080/auth/signin', 
//                 objectBody,  // Correctly passing objectBody as the data parameter
//                 {
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Access-Control-Allow-Origin': 'http://localhost:5173' // Update with your frontend URL
//                     }
//                 }
//             );
//             return (response); // Log the response from the server
//         } catch (error) {
//             console.error('Error sending data:', error);
//         }
//     };

//     function toggleSign(){
//         setsignup((prev) => !prev);
//     }

//     async function trySignup(objectBody){
//        const checker = JSON.stringify(objectBody);
//        const signupOutput = await sendDataSignup(checker);
//        console.log(signupOutput);
//     }

//     async function trySignin(objectBody){
//         const checker = JSON.stringify(objectBody);
//         const signupOutput = await sendDataSignin(checker);
//         if(signupOutput.status == 201){
//             setTestState(true);
//             console.log(signupOutput.data);
//             showAlert();
//         }else{
//             setTestState(false);
//             showAlert();
//         }
//     }

//     function showAlert(){
//         useEffect(() => {
//             // Set a timeout to hide the component after 5 seconds
//             const timer = setTimeout(() => {
//               setShowComponent(false);
//             }, 5000);
        
//             // Clear the timeout when the component unmounts or the timer changes
//             return () => clearTimeout(timer);
//           }, []); 
//     }

//     return(<>
//         <div id="body">
//             <LoginCard signupstatus={signup} togglefunction={toggleSign} singupFunction ={trySignup} signinFunction = {trySignin}/>
//             {showComponent && <LoginStatusCard status={testState} />}
            
//         </div>
        
//     </>)
// }

export default function AuthPage() {
    const [signup, setSignup] = useState(true);
    const [testState, setTestState] = useState();
    const [showComponent, setShowComponent] = useState(false);
    

    const apiUrl = 'http://localhost:8181/auth'; // Base API URL

    const sendData = async (endpoint, objectBody) => {
        try {
            const response = await axios.post(`${apiUrl}/${endpoint}`, objectBody, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:5173' // Update with your frontend URL
                }
            });
            return response; // Return the response from the server
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const toggleSign = () => {
        setSignup(prev => !prev);
    };

    const trySignup = async (objectBody) => {
        const checker = JSON.stringify(objectBody);
        const signupOutput = await sendData('signup', checker);
        if (signupOutput.status === 201) {
            setTestState(true);
            localStorage.setItem('token', signupOutput.data.jwt);
            showAlert();
            window.location.href = "/shop";
           
        } else {
            setTestState(false);
            showAlert();
        }
    };

    const trySignin = async (objectBody) => {
        const checker = JSON.stringify(objectBody);
        const signinOutput = await sendData('signin', checker);
        if (signinOutput.status === 201) {
            setTestState(true);
            console.log(signinOutput.data);
            showAlert();
            localStorage.setItem('token',signinOutput.data.jwt)
            window.location.href = "/shop";
           
        } else {
            setTestState(false);
            showAlert();
        }
    };

    const showAlert = () => {
        setShowComponent(true);
        setTimeout(() => {
            setShowComponent(false);
        }, 10000);
    };

    return (
        <div id="body">
            <LoginCard signupstatus={signup} togglefunction={toggleSign} singupFunction={trySignup} signinFunction={trySignin}/>
            {showComponent && <LoginStatusCard status={testState} />}
        </div>
    );
}
