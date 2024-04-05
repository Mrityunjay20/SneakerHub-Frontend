import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import SideBar from "../components/SideBar";
import api from "../api";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6); // Initial number of products per page

  const [allState, setAllState] = useState();

  
  useEffect(() => {
    api
      .get("/products")
      .then((response) => {
        const fetchedProducts = response.data;
        setAllState(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  

  // Update number of products per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setProductsPerPage(8); // Increase to 8 for small screens
      } else {
        setProductsPerPage(6); // Reset to 6 for larger screens
      }
    };

    handleResize(); // Call on initial render

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate index range for products to display based on current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Next page
  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
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
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  const renderSideBar = window.innerWidth >= 768;

  async function filterfunction(gender){
    let fetchedProducts = [];
    await api
      .get("/products")
      .then((response) => {
        setAllState(response.data);
        setProducts(response.data);
        fetchedProducts = response.data
        console.log(fetchedProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
      const newprods = await fetchedProducts.filter(product => product.gender == gender)
    setProducts(newprods);
    console.log(products);
  }

  return (
    <div className="flex flex-col">
      <div className="flex">
        {renderSideBar && <SideBar filtervalue={filterfunction} />}
        <div className="flex flex-col w-full overflow-hidden">
          <div className="max-h-[100vh] flex flex-wrap justify-center overflow-auto">
            <div
              className={`grid grid-cols-${
                productsPerPage === 8 ? "2" : "3"
              } md:grid-cols-3 `}
            >
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
            currentPage === Math.ceil(products.length / productsPerPage)
          }
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === Math.ceil(products.length / productsPerPage)
              ? "bg-gray-300 text-gray-700 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
