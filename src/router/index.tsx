import { Navigate } from "react-router-dom";
import Page1 from "../view/Page1";
import Page2 from "../view/Page2";

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