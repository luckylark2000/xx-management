import { Navigate, useRoutes } from "react-router-dom";
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

export const router_items: Array<object> = [
    {
        path: "/",//首次进入直接重定向到登录页面
        element: <Navigate to="/login" />
    },
    {
        path: "/login",//登录页
        element: <Login />,
        meta: {
            unwantedAuth: true//不需要进行身份验证
        }
    },
    {
        //path: "",
        element: <Home />,
        children: [
            {
                path: "/dashboard/index",
                element: <Page1 />
            },
            {
                path: "/dataScreen/index",
                element: <Page2 />
            },

            //path: "user",
            // element: <Admin />,
            //element: <Navigate to='admin' />,

            {
                path: "/user/admin",
                element: <Admin />
            },
            {
                path: "/user/manager",
                element: <Manager />
            },
            {
                path: "/user/staff",
                element: <Staff />
            },

            //team

            {
                path: "/team/happy",
                element: <Happy />
            },
            {
                path: "/team/joker",
                element: <Joker />
            },
            //file
            {
                path: "/files",
                element: <Files />
            },
        ]
    },

    {
        path: "*",//匹配不上的都直接跳到首页即可
        element: <Navigate to="/login" />
    },
]

const GetRouter = () => {
    let routes = useRoutes(router_items)
    return routes
}
export default GetRouter