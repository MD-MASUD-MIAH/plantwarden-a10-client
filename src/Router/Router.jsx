import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Addplants from "../components/Addplants";
import AllPlants from "../components/AllPlants";
import DetailsPage from "../components/DetailsPage";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Loader from "../components/Loader";
import Login from "../components/Login";
import Myplant from "../components/Myplant";
import Register from "../components/Register";
import Update from "../components/Update";
import PrivateRoute from "../contexts/PrivateRoute";
import DashboardLayout from "../Root/DashboardLayout";
import ManuSatatic from "../components/ManuSatatic";
import Star from "../components/Star";
import Profile from "../components/Profile";
import TermsAndConditions from "../components/TermsAndConditions";
import About from "../components/About";
import HelpComponent from "../components/HelpComponent";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
       
        loader: () =>
          fetch("https://plantwarden-b11a10-server.vercel.app/plants"),
        hydrateFallbackElement: <Loader></Loader>,
        Component: Home,
      },
      {
        path: "/allplans",

        loader: () =>
          fetch("https://plantwarden-b11a10-server.vercel.app/plants"),

        Component: AllPlants,
      },
      {
        path: "/addplnats",
        element:<PrivateRoute>
            <Addplants></Addplants>
          </PrivateRoute>
        ,
      },

      {
        path: "/myplants",

        loader: () =>
          fetch("https://plantwarden-b11a10-server.vercel.app/plants"),
        element:<PrivateRoute><Myplant></Myplant></PrivateRoute>
      },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      {path:'//terms',Component:TermsAndConditions},
      {path:'/about',Component:About},
      {path:'/help',Component:HelpComponent},
      {
        path: "/details/:id",

        loader: ({ params }) =>
          fetch(
            `https://plantwarden-b11a10-server.vercel.app/plants/${params.id}`
          ),

        element: <PrivateRoute>
            <DetailsPage></DetailsPage></PrivateRoute>
        ,
      },
      {
        path: "/update/:id",

        loader: ({ params }) =>
          fetch(
            `https://plantwarden-b11a10-server.vercel.app/plants/${params.id}`
          ),

        element:<PrivateRoute>
            <Update></Update></PrivateRoute>
        
      },
    ],
  },

  {

    path:'/dashboard',element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute> ,children:[

      {index:true , Component:Star},
      {path:'myplants',  loader: () =>
          fetch("https://plantwarden-b11a10-server.vercel.app/plants"),
        element:<PrivateRoute><Myplant></Myplant></PrivateRoute>},
        {path:'addplnats', element:<PrivateRoute>
            <Addplants></Addplants>
          </PrivateRoute>},
          {path:'profile',Component:Profile}
    ]
  }
]);
