import image from "../assets/nopermission.png";

const LoginPageLink = () => (
  <a href="/login" className="text-blue-500 hover:underline">
    Login
  </a>
);

const LoginPagePrompt = () => (
  <div className="w-full bg-black h-screen flex flex-col items-center justify-center">
    <img className="mt-4  w-[500px] h-auto" src={image} alt="agea" />
    <div className="text-center">
      <p className="text-5xl text-white font-bold">No Permission</p>
      <p className="text-lg text-gray-800">
        Oops! It seems you don't have permission to access this page, try logging in <br/>
        <LoginPageLink />
      </p>
    </div>
  </div>
);

export default LoginPagePrompt;
