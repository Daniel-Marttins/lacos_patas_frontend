import React from "react";
import { Button, Form, Input } from "antd";
import img_two from '../images/img-2.png'
import img_three from '../images/img-3.png'
import { useHookLocation } from "../hooks/useHookLocation";

const Login: React.FC = () => {
    const [form] = Form.useForm();
    const { handleChangeLocation } = useHookLocation();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return(
        <div className="flex items-center justify-betweens w-full h-full">
            <div className="flex items-center justify-center relative h-full bg-slate-800" style={{ width: '65%' }}>
                <img src={img_three} style={{ width: 250, height: 250 }} className="absolute top-40 left-28"/>
                <h1 className="flex flex-col absolute bottom-36 text-5xl mt-28 w-3/4 text-slate-900 bg-slate-200 font-bold p-6">
                    Bem-vindo ao Laços & Patas!
                    <span className="text-slate-400 text-sm mt-4">
                        Faça parte dessa revolução na adoção de animais. Acesse sua conta para começar a criar laços de amor e transformar vidas. Juntos, vamos dar patas para uma nova era de cuidado e compaixão. 🐾💛
                    </span>
                </h1>
                <Button 
                    type="link" 
                    className="absolute bottom-24 right-32 text-slate-50 font-bold"
                    onClick={() => handleChangeLocation('/')}
                >
                    Clique aqui se deseja retorar ao menu inicial...
                </Button>
            </div>

            <div className="flex items-center justify-center h-full bg-slate-300" style={{ width: '35%' }}>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    className="flex flex-col items-center justify-end w-full h-full"
                >
                    <h1 className="text-slate-800 text-3xl items-start font-bold" style={{ width: '60%' }}>Laços & Patas - Login</h1>
                    <span className="text-slate-800 text-sm items-start mt-2" style={{ width: '60%' }}>Criando laços, salvando vidas!</span>
                    <div className="flex flex-col items-start justify-center mt-2 mb-36" style={{ width: '60%', height: '40%' }}>
                        <Form.Item 
                            label='Email'
                            name='email'
                            className="w-full text-slate-800"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor, insira seu email!',
                                }
                            ]}
                        >
                            <Input placeholder="Email" className="w-full mt-2" />
                        </Form.Item>
                        <Form.Item 
                            label='Senha'
                            name='password'
                            className="w-full" 
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor, insira sua senha!',
                                }
                            ]}
                        >
                            <Input.Password placeholder="Senha" className="w-full mt-1"/>
                        </Form.Item>
                        <Button htmlType="submit" type="primary">Acessar</Button>
                    </div>
                </Form>

                <a className="absolute bottom-10 text-sm text-blue-900" href="#">Ainda não tem uma conta? Acesse aqui</a>
            </div>
        </div>
    );
}

export default Login;