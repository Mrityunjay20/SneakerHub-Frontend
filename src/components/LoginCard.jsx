import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import RedShoe from "../assets/redshoe.png";
export default function LoginCard({ signupstatus, singupfunction }) {
  return (
    <>
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
              <div class="relative mb-4">
                <label for="user_name" class="leading-7 text-sm text-gray-600">
                  User Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label for="email" class="leading-7 text-sm text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label for="password" class="leading-7 text-sm text-gray-600">
                  Password
                </label>
                <input
                  type="Password"
                  id="password"
                  name="password"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <label for="password" class="leading-7 text-sm text-gray-600">
                  Confirm Password
                </label>
                <input
                  type="Password"
                  id="password"
                  name="password"
                  class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <Link to="/">
                <Button className="mt-2">Signup</Button></Link>
                <Button
                  color="blue"
                  className="p-3 mt-2 ml-2"
                  onClick={() => singupfunction()}
                >
                  {signupstatus ? "Signin" : "Signup"} instead
                </Button>
              </div>
            </div>
          ) : (
            <div className="p-4">
              <h1 className="text-center">Signin</h1>
              <label for="email" class="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <label for="password" class="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="Password"
                id="password"
                name="password"
                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <Button className="mt-2">Signin</Button>
              <Button
                color="blue" className="mt-2 ml-2"
                onClick={() => singupfunction()}
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
