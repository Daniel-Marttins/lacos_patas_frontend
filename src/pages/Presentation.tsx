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
            <div className={"flex items-center justify-center w-full h-full transition-all duration-200"} style={{ background: '#FFD6A8' }}>
                <div className="flex flex-col items-start justify-start h-full relative" style={{ width: '40%'}}>
                    {contents.map((content, index) => (
                        <React.Fragment key={index}>{content}</React.Fragment>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center h-full bg-slate-900"  style={{ width: '60%', background: '#154B4D' }}></div>
            </div>
        </div>
    );
}

export default Presentation;