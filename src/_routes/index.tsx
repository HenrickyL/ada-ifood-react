import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Login } from "../_pages/Login";
import { Home } from "../_pages/Home";
import { Signin } from "../_pages/Signin";
import { NotFound } from "../_pages/NotFound";
import { ProductList } from "../_pages/ProductList";
import { ProductDetails } from "../_pages/ProductDetails";
import { Cart } from "../_pages/Cart";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: 'products',
                element:<ProductList />,
                children: [
                    {path: ':productId', element: <ProductDetails />},
                ]
            },
            {
                path: 'cart',
                element: <PrivateRoute children={<Cart />} />
            },
            {path: '/*', element: <NotFound />}
        ]
    },
    {
        path: 'route-private',
        element: <PrivateRoute children={<h1>Test</h1>}/>
    },
    {
        path: 'route-test',
        element: <h1>route-test</h1>
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