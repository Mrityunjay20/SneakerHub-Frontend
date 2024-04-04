import CatagoryRow from "../components/ShopRows/CatagoryRow";
import FeaturedRow from "../components/ShopRows/FeaturedRow";
import NewArrivalRow from "../components/ShopRows/NewArrivalsRow";
import TrendingRow from "../components/ShopRows/TrendingRow";
import TextingTextContent from "../components/TextingText";
import { getAuthToken } from "../Services/authService";

export default function ShopPage(){
    console.log(getAuthToken());
    return(
        <>
        <TextingTextContent content={"shop page"}/>
        <CatagoryRow usergender={"male"} typof={"catagory"} catagoryof={"konsi cat"}/>
        <FeaturedRow usergender={"male"}/>
        <NewArrivalRow usergender={"male"}/>
        <TrendingRow usergender={"male"} />
        </>
    )
}