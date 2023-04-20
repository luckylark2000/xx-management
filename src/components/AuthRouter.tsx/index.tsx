import React, { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const AuthRouter = (props: { children: JSX.Element }) => {

    const { pathname } = useLocation();

    const token = localStorage.getItem("token");
    if (pathname === "/login") {
        return props.children
    }
    if (!token) {
        return <Navigate to="/login" />
    }
    else {
        return props.children
    }


}

export default AuthRouter