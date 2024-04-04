import { redirect } from "react-router-dom";

const LoginPageLink = () => (
  <a href="/login" className="text-blue-500 hover:underline">Login page</a>
);

const LoginPagePrompt = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-3xl font-semibold mb-4">Please log in to access your cart</h1>
    <p className="text-lg text-gray-600 mb-6">You need to be logged in to view your cart. If you don't have an account, you can create one on the<br/> <LoginPageLink />.</p>
  </div>
);

export default LoginPagePrompt;