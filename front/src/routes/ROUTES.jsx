import AddColor from "../pages/AddColor";
import ColorShop from "../pages/ColorShop";
import Home from "../pages/Home";

export const ROUTES = [
    {
        path:"/",
        element:<ColorShop/>,
        children:[{
            index:true,
            element:<Home/>
        },
        {
            path:"addcolor",
            element:<AddColor/>
        }
    
    ]
    }
]