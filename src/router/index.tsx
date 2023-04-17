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
        path: "/home",
        element: <Home />,
        children: [
            {
                index: true,
                element: <Navigate to='page1' />
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
                path: "user",
                // element: <Admin />,
                //element: <Navigate to='admin' />,
                children: [{
                    index: true,
                    element: <Navigate to='admin' />
                },
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
                },]
            },
            {
                path: "team",
                children: [
                    {
                        index: true,
                        element: <Navigate to='happy' />
                    },
                    {
                        path: "happy",
                        element: <Happy />
                    },
                    {
                        path: "joker",
                        element: <Joker />
                    },]
            },
            {
                path: "files",
                element: <Files />
            },
        ]
    },
    {
        path: "/login",//登录页
        element: <Login />
    },
    {
        path: "/",//首次进入直接重定向到登录页面
        element: <Navigate to="/login" />
    },
    {
        path: "*",//匹配不上的都直接跳到首页即可
        element: <Navigate to="/home" />
    },
]
export default routes