import { NavbarWithSearch } from "../../components/Navbar";
import TextingTextContent from "../../components/TextingText";

export default function Error404Page() {
  return (
    <div className="w-full bg-black h-screen">
        <NavbarWithSearch />
        <TextingTextContent content={'Error 404 page not found'}/>
    </div>
  );
}
