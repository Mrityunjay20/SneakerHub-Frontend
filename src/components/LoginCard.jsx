import { Button } from "@material-tailwind/react";
import { useRef } from "react";
import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import RedShoe from "../assets/redshoe.png";
import * as EmailValidator from 'email-validator';
import { NavbarWithSearch } from "./Navbar";
import { MiniNavBar } from "./MiniNav";


export default function LoginCard({ signupstatus, togglefunction, singupFunction, signinFunction }) {
  const [errorState, setErrorState] = useState("");

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confpassRef = useRef();

  const sendobject = {
    firstName: "",
    lastName:"",
    email: "",
    password: "",
  };

  function handleSignupSubmit() {
    if (
      firstNameRef.current.value.trim() == "" ||
      lastNameRef.current.value.trim() == "" ||
      emailRef.current.value.trim() == "" ||
      passwordRef.current.value.trim() == "" ||
      confpassRef.current.value.trim() == ""
    ) {
      setErrorState("fill all fields");
    } else if(!(EmailValidator.validate(emailRef.current.value.trim()))){
      setErrorState("enter correct email")
    }
    else if (passwordRef.current.value != confpassRef.current.value) {
      setErrorState("passwords do not match");
    }else if(passwordRef.current.value.trim().length < 5){
      setErrorState("Password should be 5 characters long")
    } else {
      sendobject.firstName = firstNameRef.current.value.trim();
      sendobject.lastName = lastNameRef.current.value.trim();
      sendobject.email = emailRef.current.value.trim();
      sendobject.password = passwordRef.current.value.trim();
      singupFunction(sendobject);
    }
  }
  
  function handleSigninSubmit() {
    if (
      signemailRef.current.value.trim() == "" ||
      signpasswordRef.current.value.trim() == ""
    ) {
      setErrorState("fill all fields");
    } else if(!(EmailValidator.validate(signemailRef.current.value.trim()))){
      setErrorState("enter correct email")
    }
    else {
      sendobject.email = signemailRef.current.value.trim();
      sendobject.password = signpasswordRef.current.value.trim();
      signinFunction(sendobject);
    }
    
  

  }
  const signemailRef = useRef();
  const signpasswordRef = useRef();

  return (
    <>
      <MiniNavBar />
      <div className="flex w-4/6 h-4/6 mt-24 mx-auto rounded-md">
        <div className="w-1/2 h-full bg-green-500 rounded-s-lg">
          <img
            src={RedShoe}
            alt="Shoe image"
            className="h-3/4 mx-auto pt-20 rounded-s-lg drop-shadow-2xl"
          />
        </div>
        <div className="w-1/2 h-full bg-gray-500 rounded-e-lg">
          {signupstatus ? (
            <div className="p-4">
              <h1 className="text-center">SignUp</h1>
              <div className="relative mb-4">
                <label
                  htmlFor="user_name"
                  className="leading-7 text-sm text-gray-600"
                >
                  First Name
                </label>
                <input
                  type="text"
                  ref={firstNameRef}
                  id="user_name"
                  name="user_name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label
                  htmlFor="user_name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  ref={lastNameRef}
                  id="user_name"
                  name="user_name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  ref={emailRef}
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="Password"
                  id="password"
                  ref={passwordRef}
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label
                  htmlFor="confpassword"
                  className="leading-7 text-sm text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  type="Password"
                  id="confpassword"
                  ref={confpassRef}
                  name="confpassword"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <h1 className="font-normal text-red-600">{errorState}</h1>
                <Button onClick={handleSignupSubmit} className="mt-2">Signup</Button>
                <Button
                  color="blue"
                  className="p-3 mt-2 ml-2"
                  onClick={() => {
                    togglefunction();
                    setErrorState('');
                  }}
                >
                  {signupstatus ? "Signin" : "Signup"} instead
                </Button>
              </div>
            </div>
          ) : (
            <div className="p-4">
              <h1 className="text-center">Signin</h1>
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                ref={signemailRef}
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="Password"
                ref={signpasswordRef}
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <h1 className="text-red-600 font-semibold">{errorState}</h1>
              <Button onClick={handleSigninSubmit} className="mt-2">Signin</Button>
              <Button
                color="blue"
                className="mt-2 ml-2"
                onClick={() => {
                  togglefunction();
                  setErrorState('');
                }}
              >
                {signupstatus ? "Signin" : "Signup"} instead
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
