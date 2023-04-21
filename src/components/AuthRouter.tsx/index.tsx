import { Navigate, useLocation } from 'react-router-dom';
import { matchRoute } from '../../utils/util';
import { router_items } from '../../router';

const AuthRouter = (props: { children: JSX.Element }) => {

    const { pathname } = useLocation();
    const router = matchRoute(pathname, router_items)
    const token = localStorage.getItem("token");

    //判断需不需要进行权限认证
    if (router.meta?.unwantedAuth) {
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