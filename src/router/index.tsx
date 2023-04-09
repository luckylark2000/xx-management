import { Navigate } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("../view/Home"));
const Page1 = lazy(() => import("../view/Page1"));
const Page2 = lazy(() => import("../view/Page2"));
const Admin = lazy(() => import("../view/Admin"));
const Manager = lazy(() => import("../view/Manager"));
const Staff = lazy(() => import("../view/Staff"));

const routes = [
    {
        path: "/",
        element: <Home />,
        children: [{
            path: "*",//多余的都直接跳到第一个页面即可
            element: <Navigate to="page1" />
        },
        {
            path: "page1",
            element: <Page1 />
        },
        {
            path: "page2",
            element: <Page2 />
        },
        // {
        //     path: "user",
        //     element: <Navigate to="admin" />,
        //     children: [
        {
            path: "admin",
            element: <Admin />
        },
        {
            path: "manager",
            element: <Manager />
        },
        {
            path: "staff",
            element: <Staff />
        },
            //     ]
            // },
        ]
    },
]
export default routes