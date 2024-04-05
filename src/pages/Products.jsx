import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import SideBar from "../components/SideBar";
import api from "../api";

const PRODUCTS_PER_PAGE = 6; // Number of products per page

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        api.get('/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    // Calculate index range for products to display based on current page
    const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Next page
    const nextPage = () => {
        if (currentPage < Math.ceil(products.length / PRODUCTS_PER_PAGE)) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Previous page
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Dynamically generate page numbers based on total products and products per page
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / PRODUCTS_PER_PAGE); i++) {
        pageNumbers.push(i);
    }

    return (
        < >
            <div className="flex ">
                <SideBar />
                 <div className="flex flex-col w-full overflow-hidden">
                <div className="h-full  overflow-auto">
                    <div className="grid grid-cols-3 sd:grid-cols-2 ">
                        {currentProducts.map((prod) => (
                            <ProductCard
                                key={prod.id}
                                productid={prod.id}
                                productImage={prod.imageURL}
                                productName={prod.name}
                                productPrice={prod.price}
                                shortDescription={prod.brand}
                            />
                        ))}
                    </div>
                </div>
                </div>
            </div>

            <div className="flex justify-center p-4">
                {/* Previous page button */}
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`mx-1 px-3 py-1 rounded ${
                        currentPage === 1
                            ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                            : "bg-blue-600 text-white"
                    }`}
                >
                    Prev
                </button>
                {/* Pagination */}
                {pageNumbers.map((pageNumber) => (
                    <button
                        key={pageNumber}
                        onClick={() => paginate(pageNumber)}
                        className={`mx-1 px-3 py-1 rounded ${
                            currentPage === pageNumber
                                ? "bg-blue-500 text-white"
                                : "bg-gray-300 text-gray-700"
                        }`}
                    >
                        {pageNumber}
                    </button>
                ))}
                {/* Next page button */}
                <button
                    onClick={nextPage}
                    disabled={
                        currentPage === Math.ceil(products.length / PRODUCTS_PER_PAGE)
                    }
                    className={`mx-1 px-3 py-1 rounded ${
                        currentPage === Math.ceil(products.length / PRODUCTS_PER_PAGE)
                            ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                            : "bg-blue-500 text-white"
                    }`}
                >
                    Next
                </button>
            </div>
        </>
    );
}
