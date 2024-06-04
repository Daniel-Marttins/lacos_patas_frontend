import { Form } from "antd";

export const useHookFormLogin = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return {
        form,
        onFinish
    }
}