/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react"
import FloatingButton from "../components/FloatingButton";
import Presentation from "./Presentation";
import About from "./About";
import Login from "./Login";

const Home: React.FC = () => {
    const [section, setSection] = useState<number>(0);

    return (
        <div className="flex items-center justify-center w-full h-full overflow-hidden">
            <FloatingButton setSection={setSection} />

            <div className={section === 0 ? "flex flex-col items-center justify-center h-full w-full absolute transition-all duration-500 left-0 overflow-hidden" : "flex flex-col items-center justify-center h-full w-0 overflow-hidden transition-all opacity-0 duration-500 left-0 relative"} key="tab0">
                <Presentation />
            </div>

            <div className={section === 1 ? "flex flex-col items-center justify-center h-full w-full absolute transition-all duration-500 right-0 overflow-hidden" : "flex flex-col items-center justify-center h-full w-0 overflow-hidden transition-all opacity-0 duration-500 left-0 relative"} key="tab1">
                <Login />
            </div>

            <div className={section === 2 ? "flex flex-col items-center justify-center h-full w-full absolute transition-all duration-500 right-0 overflow-hidden" : "flex flex-col items-center justify-center h-full w-0 overflow-hidden transition-all opacity-0 duration-500 left-0 relative"} key="tab1">
                <About />
            </div>

        </div>
    );
}

export default Home;