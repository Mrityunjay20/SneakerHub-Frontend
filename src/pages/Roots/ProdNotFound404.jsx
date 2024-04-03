import { NavbarWithSearch } from "../../components/Navbar";
import notFoundImage from "../../assets/productnotfound.png"; // Import the image

export default function ProdNotFound() {
  return (
    <div className="w-full bg-black h-screen flex flex-col items-center justify-center h-screen">
      <NavbarWithSearch />
      <img className="mt-10  w-[500px] h-auto" src={notFoundImage} alt="agea" />

      <div className="text-center">
        <p className="text-5xl  text-white font-bold">Product Not Found</p>
        <p className="text-lg text-gray-800">
          Don't worry, our shelves are always updating with fresh styles –
          there's something perfect waiting just for you!
        </p>
      </div>
    </div>
  );
}
