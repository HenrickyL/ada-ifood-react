import { createBrowserRouter } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { Login } from "../_pages/Login";
import { Home } from "../_pages/Home";
import { Signin } from "../_pages/Signin";
import { Link } from "react-router-dom";
import { NotFound } from "../_pages/NotFound";


const Routers = ()=>{
    function GetName(path: string | undefined): string{
        return path == '*' ? 'Not-found' : (path || '/')   }
    return(
        <div style={{display:'flex', flexDirection:'column', padding:'4px'}}>
        {routes.routes.map(route => route.children ?
            <>
                <span>{GetName(route.path)}</span>
                {route.children.map(r=>
                    <span>. . . . .  <Link to={r.path || '/'}>{GetName(r.path)}</Link></span>
                )}
            </> 
            :<Link to={route.path || '/'}>{GetName(route.path)}</Link>    
            )}
        </div>
    )
}


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {path: '/', element: <Routers />},
            {path: 'test', element: <h1>Home Test</h1> },
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