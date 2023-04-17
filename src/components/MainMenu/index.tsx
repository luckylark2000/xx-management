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
    getItem('Page1', 'page1', <PieChartOutlined />),
    getItem('Page2', 'page2', <DesktopOutlined />),
    getItem('User', 'user', <UserOutlined />, [
        getItem('Admin', 'user/admin'),
        getItem('Manager', 'user/manager'),
        getItem('Staff', 'user/staff'),
    ]),
    getItem('Team', 'team', <TeamOutlined />,
        [
            getItem('Happy', 'team/happy'),
            getItem('Joker', 'team/joker')
        ]),
    getItem('Files', 'files', <FileOutlined />),
];


const MainMenu: React.FC = () => {
    const navigateTo = useNavigate();
    const currentLocation = useLocation();
    const [openKeys, setOpenKeys] = useState<string[]>([""])
    // const [selectedKeys, setSelectedKeys] = useState<string[]>([currentLocation.pathname.slice(6)])
    const menuClick = (e: { key: string }) => {
        console.log(e)
        navigateTo(e.key)//用于控制如何点击就转到相应的路由并且展示
    }
    useEffect(() => {
        //const refreshOpenkey = "/home/" + currentLocation.pathname.split("/")[2]
        //console.log(currentLocation.pathname)
        // console.log(currentLocation.pathname.slice(6))
        // if (!currentLocation.pathname.slice(6)) {
        //     setSelectedKeys(["page1"])
        // }
        // // else if(){

        // // }
        setOpenKeys([currentLocation.pathname.split("/")[2]])
    }, [])
    const openChange = (keys: string[]) => {
        //console.log(keys)
        setOpenKeys([keys[keys.length - 1]]);
    }
    return (
        <Menu
            theme="dark"
            selectedKeys={[currentLocation.pathname.slice(6) ? currentLocation.pathname.slice(6) : 'page1']}
            mode="inline"
            items={items}
            onClick={menuClick}
            openKeys={openKeys}
            onOpenChange={openChange} />
    )
}
export default MainMenu