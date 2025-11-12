
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import { Children, Component } from "react";
import HomePage from "../Pages/HomePage";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";
import SignIn from "../Pages/SignIn";
import Register from "../Pages/Register";
 export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            index:true,
            element:<HomePage/>,
        },
        {
            path:'/about-us',
            element:<AboutUs/>,
        },
        {
            path:'/profile',
            element:<Profile/>,

        },
        {
            path:'/sign-in',
            element:<SignIn></SignIn>,
        },
        {
            path:'/register',
            element:<Register></Register>,
        },
    ]
  },
]);
