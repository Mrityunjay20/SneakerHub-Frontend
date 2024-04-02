import "./App.css";
import { Button } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import ProductDetailPage from "./pages/ProductDetail";
import Error404Page from "./pages/Error404";
import ProductsPage from "./pages/Products";

function App() {
  const router = createBrowserRouter([
    { path: "/",
      element: <RootLayout/>,
      errorElement:<Error404Page/>,
      children:[
        {index:true, element:<HomePage/>},
        {path:'/shop', element:<ShopPage/>},
        {path:'/products', element:<ProductsPage/>},
        {path:'/products/:productId', element:<ProductDetailPage/>}
      ]
  },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
