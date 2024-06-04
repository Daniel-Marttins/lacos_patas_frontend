import { Form } from "antd";
import React from "react";

export const useHookFormRegister = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return {
        form,
        onFinish
    }
}