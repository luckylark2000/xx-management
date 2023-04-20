
import { Button, Card, Checkbox, Divider, Form, Input, message, Space, Tabs } from "antd"
import styles from "./style.module.scss"
import { CSSProperties, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/login_left.png"
import { AlipayOutlined, LockOutlined, TaobaoOutlined, UserOutlined } from "@ant-design/icons";
type LoginType = 'phone' | 'account';

const iconStyles: CSSProperties = {
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '18px',
    verticalAlign: 'middle',
    cursor: 'pointer',
};

const Login = () => {
    const navigateTo = useNavigate()
    const [loginType, setLoginType] = useState<LoginType>('account');
    const [accountForm] = Form.useForm()

    const accountFormOnFinish = () => {
        localStorage.setItem("token", "34343434")
        console.log("登录了")
    }

    return (
        <div className={styles.box}>
            <div>
                <img src={loginImage} alt="login" />
            </div>
            <Card className={styles.card} >
                <Tabs
                    centered
                    activeKey={loginType}
                    items={[
                        {
                            key: 'account',
                            label: `账号密码登录`,
                            //children: `Content of Tab Pane 1`,
                        },
                        {
                            key: 'phone',
                            label: `手机号登陆`,
                            //children: `Content of Tab Pane 2`,
                        }
                    ]}
                    onChange={(activeKey) => setLoginType(activeKey as LoginType)}
                />

                {loginType === "account" &&
                    <Form
                        initialValues={{ remember: true }}
                        form={accountForm}
                        onFinish={accountFormOnFinish}>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                忘记密码？
                            </a>
                        </Form.Item>
                    </Form>}
                {loginType === "phone" &&
                    <Form>34343</Form>}
                <Button
                    type="primary"
                    block
                    onClick={() => {
                        accountForm.submit();
                        navigateTo("/home")
                        message.success("登录成功！")
                    }}>登录</Button>
                <Divider plain>
                    <span style={{ color: '#CCC', fontWeight: 'normal', fontSize: 14 }}>
                        其他登录方式
                    </span>
                </Divider>
                <Space align="center" size={24} style={{ display: "flex", justifyContent: "center" }}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            height: 40,
                            width: 40,
                            border: '1px solid #D4D8DD',
                            borderRadius: '50%',
                        }}
                    >
                        <AlipayOutlined style={{ ...iconStyles, color: '#1677FF' }} />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            height: 40,
                            width: 40,
                            border: '1px solid #D4D8DD',
                            borderRadius: '50%',
                        }}
                    >
                        <TaobaoOutlined style={{ ...iconStyles, color: '#FF6A10' }} />
                    </div>
                </Space>
            </Card>
        </div>
    )
}

export default Login

