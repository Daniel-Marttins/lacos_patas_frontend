import React from 'react';
import { Button } from 'antd';

// Importação das imagens
import icone from '../images/icone.png';
import img_two from '../images/img-2.png';
import img_three from '../images/img-3.png';

interface UseContentProps {
  tabLeft: number;
  setTabLeft: React.Dispatch<React.SetStateAction<number>>;
}

export const useContent = ({ tabLeft, setTabLeft }: UseContentProps): React.ReactElement[] => {
  return [
    <div className={tabLeft === 0 ? "flex flex-col items-center justify-center h-full w-full absolute transition-all duration-700" : "flex flex-col items-center justify-center h-0 w-full overflow-hidden transition-all opacity-0 duration-700"} key="tab0">
      <div className="flex flex-col items-center justify-center mt-8" style={{ width: '90%' }}>
        <img src={icone} style={{ width: 114, height: 114 }} alt="Ícone" />
        <h1 className="text-slate-50 text-3xl font-bold">Laços & Patas</h1>
        <span className="text-slate-400 text-sm mt-2">Criando laços, salvando vidas!</span>
      </div>
      <Button type="primary" onClick={() => setTabLeft(1)} className="mt-4">Conhecer mais!</Button>
    </div>,
    
    <div className={tabLeft === 1 ? "flex flex-col items-center justify-center h-full w-full absolute transition-all duration-700 overflow-hidden" : "flex flex-col items-center justify-center h-0 w-full overflow-hidden opacity-0 transition-all duration-700"} key="tab1">
      <img src={img_two} alt="Imagem dois" />
      <div className="flex flex-col items-start justify-center mt-8" style={{ width: '85%' }}>
        <h1 className="text-3xl font-bold text-slate-50">Bem-vindo ao Laços & Patas</h1>
        <h2 className="text-xl text-slate-100">Transformando Vidas com Amor</h2>
        <span className="text-sm mt-4 text-slate-400">
          No Laços & Patas, acreditamos que cada animal merece um lar cheio de carinho. Somos uma plataforma dedicada à adoção e cuidados de animais, onde cada patinha encontra seu caminho para um lar amoroso.
        </span>
      </div>
      
      <div className="flex items-center justify-between absolute bottom-5 z-10" style={{ width: '85%' }}>
        <Button type="primary" danger onClick={() => setTabLeft(0)}>Voltar</Button>
        <Button type="primary" onClick={() => setTabLeft(2)}>Avançar</Button>
      </div>
    </div>,
    
    <div className={tabLeft === 2 ? "flex flex-col items-center justify-center h-full w-full absolute transition-all duration-700 overflow-hidden" : "flex flex-col items-center justify-center h-0 w-full overflow-hidden opacity-0 transition-all duration-700"} key="tab2">
      <img src={img_three} alt="Imagem três" />
      <div className="flex flex-col items-start justify-center mt-8" style={{ width: '85%' }}>
        <h1 className="text-3xl font-bold text-slate-50">Bem-vindo ao Laços & Patas</h1>
        <h2 className="text-xl text-slate-100">Transformando Vidas com Amor</h2>
        <span className="text-sm mt-4 text-slate-400">
          No Laços & Patas, acreditamos que cada animal merece um lar cheio de carinho. Somos uma plataforma dedicada à adoção e cuidados de animais, onde cada patinha encontra seu caminho para um lar amoroso.
        </span>
      </div>

      <div className="flex items-center justify-between absolute bottom-5 z-10" style={{ width: '85%' }}>
        <Button type="primary" danger onClick={() => setTabLeft(1)}>Voltar</Button>
        <Button type="primary" onClick={() => setTabLeft(0)}>Avançar</Button>
      </div>
    </div>,
  ];
};
