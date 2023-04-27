import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import { HOME_URL } from "../../config/config";

const NotAuth = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate(HOME_URL);
    };
    return (
        <Result
            status="403"
            title="403"
            subTitle="对不起，您没有访问此页面的权限"
            extra={
                <Button type="primary" onClick={goHome}>
                    Back Home
                </Button>
            }
        />
    );
};

export default NotAuth;
