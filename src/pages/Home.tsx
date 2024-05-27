/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react"
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Col, Drawer, Row, Statistic } from "antd";
import icone from '../images/icone.png'
import img_one from '../images/img-1.png'
import img_two from '../images/img-2.png'
import img_three from '../images/img-3.png'


const Home: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex items-center justify-center w-full h-full">
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                className={collapsed === false ? 'absolute top-4 left-4 transition-all duration-200 bg-slate-800 z-20' : 'absolute top-4 left-96 ml-3 transition-all duration-300 bg-slate-800 z-20'}
                style={{
                    fontSize: '16px',
                    width: 44,
                    height: 44,
                    color: 'white'
                }}
            />
            <div className={collapsed === false ? "flex items-center justify-center w-0 opacity-0 h-full transition-all duration-200 absolute left-0 z-10" : "flex items-center justify-center w-1/5 h-full transition-all duration-300 overflow-hidden absolute left-0 z-10"}>
                <div className="relative w-full h-full">
                    <div className="absolute top-0 w-full h-1/4 flex flex-col items-center justify-center z-10 bg-slate-800 shadow-xl">
                        <img src={icone} />
                        <h1 className="text-slate-50 text-3xl font-bold">Laços & Patas</h1>
                        <span className="text-slate-400 text-sm mt-2">Criando laços, salvando vidas!</span>
                    </div>
                    <div className="pt-60 w-full h-full overflow-y-auto bg-slate-950">
                        <div className="p-4 text-slate-50">
                            {/* CONTEUDOS AQUI */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex items-center justify-center w-full h-full transition-all duration-200 bg-slate-700"}>
                <div className="flex flex-col items-center justify-center h-full" style={{ width: '40%' }}>
                    <img src={img_three} />
                    <Row gutter={16}>
                        <Col span={12}>
                            <Statistic title="Active Users" value={112893} />
                        </Col>
                        <Col span={12}>
                        <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                        <Button style={{ marginTop: 16 }} type="primary">
                            Recharge
                        </Button>
                        </Col>
                        <Col span={12}>
                            <Statistic title="Active Users" value={112893} loading />
                        </Col>
                    </Row>
                </div>
                <div className="flex flex-col items-center justify-center h-full bg-slate-900"  style={{ width: '60%' }}></div>
            </div>
        </div>
    );
}

export default Home;