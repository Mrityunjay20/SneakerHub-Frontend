import { NavbarWithSearch } from "../../components/Navbar";
import TextingTextContent from "../../components/TextingText";
import notFoundImage from "../../assets/404.png"; // Import the image
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export default function Error404Page() {
  return (
    <div className="w-full bg-black h-screen flex flex-col items-center justify-center h-screen">
      <NavbarWithSearch />
      <img className="pt-20 w-[800px] h-auto" src={notFoundImage} alt="agea" />

      <div className="text-center mt-8">
        <p className="text-6xl text-white font-bold">Page Not Found</p>
        <p className="text-lg font-bold text-gray-800 mb-4">
          Oops! Looks like you've wandered off the beaten path.
        </p>
      </div>
    </div>
  );
}
