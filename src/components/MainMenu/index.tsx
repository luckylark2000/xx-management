import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
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
        getItem('Admin', '/admin'),
        getItem('Manager', '/manager'),
        getItem('Staff', '/staff'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];


const MainMenu: React.FC = () => {
    const navigateTo = useNavigate();
    const currentLocation = useLocation();

    const menuClick = (e: { key: string }) => {
        navigateTo(e.key)
    }
    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[currentLocation.pathname]}
            mode="inline"
            items={items}
            onClick={menuClick} />
    )
}
export default MainMenu