import { UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, MenuProps, Modal, message } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';


const HeadContent = () => {
    const navigateTo = useNavigate();
    const logout = () => {
        Modal.confirm({
            title: "确定要退出吗",
            okText: "确定",
            cancelText: "取消",
            centered: true,
            onOk: () => {
                //TODO token设置为空
                message.success("退出成功！")
                navigateTo("/login")
            }



        })
    }
    const items: MenuProps['items'] = [
        {
            label: <a href="https://www.antgroup.com">1st menu item</a>,
            key: '0',
        },
        {
            label: <a href="https://www.aliyun.com">2nd menu item</a>,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: '退出登录',
            key: 'exit',
            onClick: logout
        },
    ];
    return (
        <div className='header' >
            <Dropdown menu={{ items }} trigger={["click"]}>
                <Avatar alt='avatar' icon={<UserOutlined />} />
            </Dropdown>
        </div>
    )
}

export default HeadContent