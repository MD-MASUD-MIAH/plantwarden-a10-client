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
]);
