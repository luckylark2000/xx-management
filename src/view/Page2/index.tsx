import { InboxOutlined } from "@ant-design/icons";
import { Button, Form, Upload, message } from "antd";

const Page2 = () => {
    const [form] = Form.useForm()
    const normFile = (e: any) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    const onFinish = (e: any) => {
        console.log("表单", e)
        //form.submit()
    }
    //上传文件之前进行检查，只能上传png图片
    const beforeUploadCheckFileType = (file: File) => {
        console.log(33333, file)
        const isPNG = file.type === 'image/png';
        if (!isPNG) {
            message.error(`${file.name} 不是png图片类型无法上传，请重新选择文件`);
        }
        return isPNG || Upload.LIST_IGNORE;
    }
    return (<div>
        <p>学习使用Form和Table组件</p>
        <Form
            layout="vertical"
            onFinish={onFinish}
            form={form}>
            <Form.Item
                label="选择上传的文件"
                wrapperCol={{ span: 12, offset: 6 }}
            >
                <Form.Item
                    name="dragger"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    rules={[{ required: true, message: '请选择上传文件' }]}
                    noStyle
                >
                    <Upload.Dragger
                        name="files"
                        action="/upload.do"
                        accept=".png"
                        beforeUpload={beforeUploadCheckFileType}
                    >
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