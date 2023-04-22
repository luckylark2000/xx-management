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
    getItem('看板主页', '/dashboard/index', <PieChartOutlined />),
    getItem('大屏显示', '/dataScreen/index', <DesktopOutlined />),
    getItem('用户管理', 'user', <UserOutlined />, [
        getItem('Admin', '/user/admin'),
        getItem('Manager', '/user/manager'),
        getItem('Staff', '/user/staff'),
    ]),
    getItem('团队管理', 'team', <TeamOutlined />,
        [
            getItem('Happy', '/team/happy'),
            getItem('Joker', '/team/joker')
        ]),
    getItem('文件', '/files', <FileOutlined />),
];

const MainMenu: React.FC = () => {
    const navigateTo = useNavigate();
    const currentLocation = useLocation();
    const [openKeys, setOpenKeys] = useState<string[]>([""])
    const menuClick = (e: { key: string }) => {
        navigateTo(e.key)//用于控制如何点击就转到相应的路由并且展示
    }
    useEffect(() => {
        //设置默认打开页
        setOpenKeys([currentLocation.pathname.split("/")[1]])
    }, [])
    const openChange = (keys: string[]) => {
        setOpenKeys([keys[keys.length - 1]]);
    }
    return (
        <Menu
            theme="dark"
            selectedKeys={[currentLocation.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick}
            openKeys={openKeys}
            onOpenChange={openChange} />
    )
}
export default MainMenu