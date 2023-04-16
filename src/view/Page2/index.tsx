import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, Upload } from "antd";
import { FormInstance, useForm } from "antd/es/form/Form";

const Page2 = () => {
    const [form] = Form.useForm()
    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    return (<div>
        <p>学习使用Form和Table组件</p>
        <Form
            layout="vertical"
            form={form}>
            <Form.Item
                label="选择上传的文件"
                wrapperCol={{ span: 12, offset: 6 }}
            >
                <Form.Item name="dragger"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}

                    noStyle
                >
                    <Upload.Dragger name="files" action="/upload.do">
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                    </Upload.Dragger>
                </Form.Item>
            </Form.Item>
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
            </Form.Item>
        </Form>
    </div>)
}
export default Page2;