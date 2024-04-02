import { Link } from "react-router-dom"
import TextingTextContent from "../components/TextingText"

const PRODUCTS=[
    {id:1, title:"Product 1"},
    {id:2, title:"Product 2"},
    {id:3, title:"Product 3"},
]

export default function ProductsPage(){
    return(<>
    <ul>
       {PRODUCTS.map((prod)=>(
        <li key={prod.id}>
            <Link to={`/products/${prod.id}`}><TextingTextContent content={prod.title} /></Link>
            
        </li>
       ))}
    </ul>
    </>)
}