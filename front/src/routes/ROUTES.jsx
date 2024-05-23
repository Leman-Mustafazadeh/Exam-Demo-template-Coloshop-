import BestSellers from "../components/BestSellers";
import Blogs from "../components/Blogs";
import Genre from "../components/Genre";
import Letter from "../components/Letter";
import NewArrival from "../components/NewArrival";
import Products from "../components/Products";
import AddShops from "../pages/AddShops";
import BasketPage from "../pages/BasketPage";
import DetailShop from "../pages/DetailShop";
import Home from "../pages/Home";
import ShopRouter from "../pages/ShopRouter";

export const ROUTES = [{
    path:"/",
    element:<ShopRouter/>,
    children:[{
        index:true,
        element:<Home/>
    },
    {
        path:"/addshops",
        element:<AddShops/>,

    },
    {
        path:"detailshop/:id",
        element:<DetailShop/>
    },{
        path:"bestsellers",
        element:<BestSellers/>
    },
    {
        path:"Blogs",
        element:<Blogs/>
    },
    {
        path:"genre",
        element:<Genre/>
    },
    {
        path:"letter",
        element:<Letter/>
    },{
        path:"newarrival",
        element:<NewArrival/>
    },
    {
        path:"products",
        element:<Products/>
    },{
        path:"basketpage",
        element:<BasketPage/>
    }
]
}]