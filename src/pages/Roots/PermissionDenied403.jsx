import { NavbarWithSearch } from "../../components/Navbar";
import image from "../../assets/nopermission.png"; // Import the image

export default function PermissionDenied403() {
  return (
    <div className="w-full bg-black h-screen flex flex-col items-center justify-center h-screen">
      <NavbarWithSearch />
      <img className="mt-10  w-[500px] h-auto" src={image} alt="agea" />
      <div className="text-center">
        <p className="text-5xl text-white font-bold">No Permission</p>
        <p className="text-lg text-gray-800">
          Oops! It seems you don't have permission to access this page.
        </p>
      </div>
    </div>
  );
}
