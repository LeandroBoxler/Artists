import { createBrowserRouter } from "react-router-dom";
import App from "./layouts/App";
import { Home } from "./pages/Home";
import { Usuario } from "./pages/Usuario";
import { Register } from "./pages/Register";
import { Perfil } from "./pages/Perfil";
import { Config } from "./pages/Config";

export const router= createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        children:[
            {
                index:true,
                element: <Home/>
            },
            {
                path:"/user/login",
                element: <Usuario/>,
            },
            {                
                path:"/user/register",
                element: <Register/>,
            },
            {                
                path:"/user/Perfil",
                element: <Perfil/>,
            },
            {                
                path:"/user/Config",
                element: <Config/>,
            },
    ]


    }
]) 