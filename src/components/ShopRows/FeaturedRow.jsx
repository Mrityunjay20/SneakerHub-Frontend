import ProductCard from "../ProductCard";

const PRODUCTS = [
    { Id: "1", name: "nike", price: "500", shortDecp: "rghrgbgkrtgbrtg" },
    { Id: "2", name: "adidas", price: "5100", shortDecp: "rghrgbgkrtgbrtg" },
    { Id: "3", name: "puma", price: "2100", shortDecp: "rghrgbgkrtgbrtg" },
    { Id: "4", name: "reebok", price: "3200", shortDecp: "rghrgbgkrtgbrtg" },
    { Id: "5", name: "new balance", price: "2300", shortDecp: "rghrgbgkrtgbrtg" },
  ];

export default function FeaturedRow({usergender}){
    return (<>
    <h1 className="text-white">Featured Row</h1>
    <p className="text-white">{usergender}</p>
    <div className="flex overflow-x-auto">
        {PRODUCTS.map((prod) => (
          <ProductCard
            key={prod.ID}
            productid={prod.ID}
            productName={prod.name}
            productPrice={prod.price}
            shortDescription={prod.shortDecp}
            className="mr-4" // Optional: Adjust margin between product cards
          />
        ))}
      </div>
    </>)
}