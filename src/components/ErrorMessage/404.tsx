import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
    const navigateTo = useNavigate();
    const goHome = () => {
        navigateTo("/dashboard/index")
    }
    return <Result
        status="404"
        title="404"
        subTitle="对不起，您所访问的页面不存在！"
        extra={<Button type="primary" onClick={goHome}>Back Home</Button>}
    />
}




export default NotFound;
