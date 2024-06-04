import React from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import img_two from '../images/img-2.png'
import img_three from '../images/img-1.png'
import { useHookFormRegister } from "../controllers/useHookFormRegister";
import moment from "moment";

const { Option } = Select;

const Register: React.FC = () => {
    const { form, onFinish } = useHookFormRegister();

    return(
        <div className="flex items-center justify-betweens w-full h-full">
            <div className="flex items-center justify-center relative h-full bg-slate-800" style={{ width: '45%' }}>
                <img src={img_three} style={{ width: 250, height: 250 }} className="absolute top-40 mr-5"/>
                <h1 className="flex flex-col absolute bottom-36 text-4xl mt-28 w-3/4 text-slate-900 bg-slate-200 font-bold p-6">
                    Junte-se ao Laços & Patas!
                    <span className="text-slate-400 text-sm mt-4">
                        Faça parte dessa revolução na adoção de animais. Cadastre-se agora para começar a criar laços de amor e transformar vidas. Juntos, vamos dar patas para uma nova era de cuidado e compaixão. 🐾💛
                    </span>
                </h1>
            </div>

            <div className="flex items-center justify-center h-full bg-slate-300" style={{ width: '55%' }}>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    className="flex flex-col items-center justify-center w-full h-full"
                >
                    <h1 className="text-slate-800 text-3xl items-start font-bold" style={{ width: '75%' }}>Laços & Patas - Cadastro</h1>
                    <span className="text-slate-800 text-sm items-start mt-2" style={{ width: '75%' }}>Criando laços, salvando vidas!</span>
                    <div className="flex flex-row items-start justify-center border-l p-2 mt-8" style={{ width: '75%'}}>
                        <Form.Item 
                            label='Nome'
                            name='firstName'
                            className="w-1/2 text-slate-800 mr-2"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor, insira seu nome!',
                                }
                            ]}
                        >
                            <Input placeholder="Seu primeiro nome" className="w-full shadow-md" />
                        </Form.Item>
                        <Form.Item 
                            label='Sobrenome'
                            name='lastName'
                            className="w-1/3 mr-2" 
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor, insira seu sobrenome!',
                                }
                            ]}
                        >
                            <Input placeholder="Seu sobrenome" className="w-full shadow-md"/>
                        </Form.Item>
                        <Form.Item 
                            label='Genêro'
                            name='genre'
                            className="w-3/12 text-slate-800"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor, selecione o genêro!',
                                }
                            ]}
                        >
                            <Select defaultValue="" className="h-full shadow-md">
                                <Option value="">Selecione:</Option>
                                <Option value="male">Masculino</Option>
                                <Option value="female">Feminino</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="flex flex-row items-start justify-center border-l p-2 " style={{ width: '75%'}}>
                        <Form.Item 
                            label='Aniversário'
                            name='birthday'
                            className="w-3/12 text-slate-800 mr-2"
                            rules={[
                                {
                                    required: true,
                                    message: 'Informe seu aniversário',
                                }
                            ]}
                        >
                            <DatePicker placeholder="Aniversário" className="w-full shadow-md"/>
                        </Form.Item>
                        <Form.Item 
                            label='Email'
                            name='email'
                            className="w-1/2 text-slate-800 mr-2"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor, insira seu email!',
                                }
                            ]}
                        >
                            <Input placeholder="Informe um email" className="w-full shadow-md" />
                        </Form.Item>
                        <Form.Item 
                            label='Tipo de usuario'
                            name='type'
                            className="w-1/3 text-slate-800"
                            rules={[
                                {
                                    required: true,
                                    message: 'Informe seu tipo de usuario',
                                }
                            ]}
                        >
                            <Select defaultValue="" className="h-full w-full shadow-md">
                                <Option value="">Selecione:</Option>
                                <Option value="user">Usuário</Option>
                                <Option value="influencer">Influenciador Digital</Option>
                                <Option value="clinic">Clinica Veterinária</Option>
                                <Option value="petshop">Loja de Petshop</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="flex flex-row items-start justify-start border-l p-2 " style={{ width: '75%'}}>
                        <Form.Item 
                            label='Senha'
                            name='password'
                            className="w-3/12 text-slate-800 mr-2"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor, insira sua senha!',
                                }
                            ]}
                        >
                            <Input.Password placeholder="Escolha uma senha" className="w-full shadow-md" />
                        </Form.Item>
                        <Form.Item 
                            label='Celular'
                            name='phone'
                            className="w-3/12 text-slate-800 mr-2"
                        >
                            <Input placeholder="Nº de celular" className="w-full shadow-md" />
                        </Form.Item>
                        <Form.Item 
                            label='Possui whatsapp?'
                            name='whatsapp'
                            className="w-3/12 text-slate-800 mr-2"
                        >
                            <Select defaultValue="" className="h-full shadow-md">
                                <Option value="">Selecione:</Option>
                                <Option value="yes">Sim</Option>
                                <Option value="no">Não</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="flex flex-row items-start justify-start border-l p-2 " style={{ width: '75%'}}>
                        <Button type="primary" htmlType="submit" className="bg-green-700">Cadastrar</Button>
                    </div>
                </Form>

                <a className="absolute bottom-10 text-sm text-blue-600" href="/login">Já possui uma conta? Faça Login</a>
            </div>
        </div>
    );
}

export default Register;