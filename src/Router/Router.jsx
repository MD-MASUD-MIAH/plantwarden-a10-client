import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../components/Home";
import AllPlants from "../components/AllPlants";
import Addplants from "../components/Addplants";
import Myplant from "../components/Myplant";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../contexts/PrivateRoute";


export const router = createBrowserRouter([


  {path:'/', Component:Root ,children:[

    {index:true, Component:Home},
    {path:'/allplans',Component:AllPlants},
    {path:'/addplnats',element:<PrivateRoute><Addplants></Addplants></PrivateRoute>},
    {path:'/myplants',element:<PrivateRoute><Myplant></Myplant></PrivateRoute>},
    {path:'/login',Component:Login},
    {path:'/register',Component:Register}
  ]}
])