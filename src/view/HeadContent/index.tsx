import { UserOutlined } from '@ant-design/icons'
import { Avatar, Dropdown, Form, Input, MenuProps, Modal, message } from 'antd'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const HeadContent = () => {
    const navigateTo = useNavigate();
    const [isAccountModalOpen, setIsAccountModalOpen] = useState(false)
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
    const accountFormOnFinish = () => {
        console.log("提交密码")
    }
    const items: MenuProps['items'] = [
        {
            label: "首页看板",
            key: 'dashboard',
            onClick: () => { navigateTo("/page1") }
        },
        {
            label: "个人信息",
            key: 'message',
        },
        {
            label: "修改密码",
            key: 'account',
            onClick: () => {
                setIsAccountModalOpen(true)
            }
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
            <Modal
                open={isAccountModalOpen}
                okText="确定"
                cancelText="取消"
                centered
                onCancel={() => { setIsAccountModalOpen(false) }}
                closable
                destroyOnClose
                onOk={() => {
                    //TODO token设置为空,onFinish添加校验，成功后才进行路由跳转跳转
                    message.success("密码修改成功，请重新登录！")
                    setIsAccountModalOpen(false)
                    //navigateTo("/login")
                    setIsAccountModalOpen(false)
                }}
            >
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={accountFormOnFinish}
                    //onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default HeadContent