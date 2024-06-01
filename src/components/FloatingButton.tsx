import React from 'react';
import {
  HomeOutlined,
  LoginOutlined,
  FolderOpenOutlined,
  QuestionCircleOutlined,
  AppstoreAddOutlined
} from '@ant-design/icons';
import { FloatButton } from 'antd';
import home from '../images/home.png';
import login from '../images/login.png';
import blog from '../images/blog.png';
import award from '../images/award.png';
import campaigns from '../images/campaigns.png';
import about from '../images/about.png';
import menu from '../images/menu.png';
import partnership from '../images/partnership.png';
import feedback from '../images/feedback.png';
import { useHookLocation } from '../hooks/useHookLocation';

interface FloatingInteface {
  setSection: (section: number) => void;
}

const FloatingButton: React.FC<FloatingInteface> = ({ setSection }) => {

  const { handleChangeLocation } = useHookLocation();

  return (
    <>
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 54 }}
        icon={<img src={menu} />}
        tooltip={<div>Atalhos da Plataforma</div>}
      >
        <FloatButton tooltip={<div>Inicio</div>} icon={<img src={home} />} onClick={() => setSection(0)} />
        <FloatButton tooltip={<div>Acessar a plataforma</div>} icon={<img src={login} />} onClick={() => handleChangeLocation('/login')} />
        <FloatButton tooltip={<div>Acessar o blog</div>} icon={<img src={blog} />} />
        <FloatButton tooltip={<div>Nossas historias</div>} icon={<img src={award} />} />
        <FloatButton tooltip={<div>Campanhas disponiveis</div>} icon={<img src={campaigns} />} />
        <FloatButton tooltip={<div>Parcerias</div>} icon={<img src={partnership} />} />
        <FloatButton tooltip={<div>Feedbacks e sugestões</div>} icon={<img src={feedback} />} />
        <FloatButton tooltip={<div>Sobre a plataforma</div>} icon={<img src={about} />} onClick={() => setSection(2)} />
      </FloatButton.Group>
    </>
  );
};

export default FloatingButton;