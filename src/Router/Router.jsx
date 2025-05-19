import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../components/Home";
import AllPlants from "../components/AllPlants";
import Addplants from "../components/Addplants";
import Myplant from "../components/Myplant";


export const router = createBrowserRouter([


  {path:'/', Component:Root ,children:[

    {index:true, Component:Home},
    {path:'/allplans',Component:AllPlants},
    {path:'/addplnats',Component:Addplants},
    {path:'/myplants',Component:Myplant}
  ]}
])