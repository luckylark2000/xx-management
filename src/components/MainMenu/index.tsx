import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}
const items: MenuItem[] = [
    getItem('Page1', '/page1', <PieChartOutlined />),
    getItem('Page2', '/page2', <DesktopOutlined />),
    getItem('User', '/user', <UserOutlined />, [
        getItem('Admin', '/user/admin'),
        getItem('Manager', '/user/manager'),
        getItem('Staff', '/user/staff'),
    ]),
    getItem('Team', '/team', <TeamOutlined />,
        [
            getItem('Happy', '/team/happy'),
            getItem('Joker', '/team/joker')
        ]),
    getItem('Files', '/files', <FileOutlined />),
];


const MainMenu: React.FC = () => {
    const navigateTo = useNavigate();
    const currentLocation = useLocation();
    const [openKeys, setOpenKeys] = useState<string[]>([""])
    const menuClick = (e: { key: string }) => {
        navigateTo(e.key)//用于控制如何点击就转到相应的路由并且展示
    }
    useEffect(() => {
        const refreshOpenkey = "/" + currentLocation.pathname.split("/")[1]
        setOpenKeys([refreshOpenkey])
    }, [])
    const openChange = (keys: string[]) => {
        setOpenKeys([keys[keys.length - 1]]);
    }
    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[currentLocation.pathname === "/" ? "/page1" : currentLocation.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
            openKeys={openKeys}
            onOpenChange={openChange} />
    )
}
export default MainMenu