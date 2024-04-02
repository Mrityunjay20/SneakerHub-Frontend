import { useParams } from "react-router-dom"
import TextingTextContent from "../components/TextingText";

export default function ProductDetailPage(){

    const params = useParams();

    return(<>
        <TextingTextContent content={"Single product page"}/>
        <TextingTextContent content={params.productId}/>
    </>)
}