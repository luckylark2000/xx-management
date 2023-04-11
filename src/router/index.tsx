import { Navigate } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("../view/Home"));
const Page1 = lazy(() => import("../view/Page1"));
const Page2 = lazy(() => import("../view/Page2"));
const Admin = lazy(() => import("../view/User/Admin"));
const Manager = lazy(() => import("../view/User/Manager"));
const Staff = lazy(() => import("../view/User/Staff"));
const Happy = lazy(() => import("../view/Team/Happy"));
const Joker = lazy(() => import("../view/Team/Joker"));
const Files = lazy(() => import("../view/Files"));
const Login = lazy(() => import("../view/Login"));
const routes = [
    {
        path: "/",
        element: <Home />,
        children: [{
            path: "/",//多余的都直接跳到第一个页面即可
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
        {
            path: "user/admin",
            element: <Admin />
        },
        {
            path: "user/manager",
            element: <Manager />
        },
        {
            path: "user/staff",
            element: <Staff />
        },
        {
            path: "team/happy",
            element: <Happy />
        },
        {
            path: "team/joker",
            element: <Joker />
        }, {
            path: "files",
            element: <Files />
        },
        ]
    },
    {

        path: "/login",//匹配不上的都直接跳到page1页面即可
        element: <Login />
    },
    {
        path: "*",//匹配不上的都直接跳到page1页面即可
        element: <Navigate to="page1" />
    },
]
export default routes