import CatagoryRow from "../components/ShopRows/CatagoryRow";
import FeaturedRow from "../components/ShopRows/FeaturedRow";
import NewArrivalRow from "../components/ShopRows/NewArrivalsRow";
import TrendingRow from "../components/ShopRows/TrendingRow";
import TextingTextContent from "../components/TextingText";

export default function ShopPage(){
    return(
        <>
        <TextingTextContent content={"shop page"}/>
        <CatagoryRow usergender={"male"}/>
        <FeaturedRow usergender={"male"}/>
        <NewArrivalRow usergender={"male"}/>
        <TrendingRow usergender={"male"} />
        </>
    )
}