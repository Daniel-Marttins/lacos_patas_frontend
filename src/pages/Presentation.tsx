/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react"
import icone from '../images/icone.png'
import { useContent } from "../hooks/useContent";
import FloatingButton from "../components/FloatingButton";

const Presentation: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [tabLeft, setTabLeft] = useState<number>(0);
    const contents = useContent({ tabLeft, setTabLeft });

    return (
        <div className="flex items-center justify-center w-full h-full">
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
                <div className="flex flex-col items-start justify-start h-full relative" style={{ width: '40%'}}>
                    {contents.map((content, index) => (
                        <React.Fragment key={index}>{content}</React.Fragment>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center h-full bg-slate-900"  style={{ width: '60%' }}></div>
            </div>
        </div>
    );
}

export default Presentation;