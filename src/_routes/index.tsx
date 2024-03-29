import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Login } from "../_pages/Login";
import { Home } from "../_pages/Home";
import { Signin } from "../_pages/Signin";
import { NotFound } from "../_pages/NotFound";
import { ProductList } from "../_pages/ProductList";
import { ProductDetails } from "../_pages/ProductDetails";
import { Cart } from "../_pages/Cart";
import { HomeIntro } from "../_pages/HomeIntro";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <HomeIntro />
            },
            {
                path: 'products',
                element:<ProductList />,
                
            },
            {
                path: 'products/:productId', 
                element: <ProductDetails />
            },
            {
                path: 'cart',
                element: <PrivateRoute children={<Cart />} />
            },
            {path: '/*', element: <NotFound />}
        ]
    },
    {
        path: 'login',
        element:
           <Login />
    },
    {
        path: 'signin',
        element:
           <Signin />
    },

    {
        path: '*',
        element: <NotFound />
    },

])