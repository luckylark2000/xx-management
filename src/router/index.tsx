import { Navigate } from "react-router-dom";
import { lazy } from "react";
const Page1 = lazy(() => import("../view/Page1"));
const Page2 = lazy(() => import("../view/Page2"));
const routes = [{
    path: "/",
    elment: <Navigate to="page1" />,
    children: [{
        path: "page1",
        element: <Page1 />
    },
    {
        path: "page2",
        element: <Page2 />
    },
    ]
}, {
    path: "*",
    elment: <Navigate to="page1" />,
}]
export default routes