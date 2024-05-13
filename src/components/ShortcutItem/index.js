// ShortcutItem/index.js
import React from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FaGlassWhiskey } from "react-icons/fa";  // Importe o ícone da água corretamente
import * as C from "./styles";


const EvolutionIcon = () => {
  return <FontAwesomeIcon icon={faDumbbell} />;
};

const WaterIcon = () => {
  return <FaGlassWhiskey />;  // Use o ícone da água corretamente
};

const ShortcutItem = ({ Icon, Title, colorIcon, ImgSrc }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Adicione uma verificação para navegar para a rota adequada
    if (Title === "Evolution") {
      navigate('/atualizacao');
    } else if (Title === "Água") {
      navigate('/agua');
    } else if (Title === "Vídeos") {
      navigate ('/videos')
    } else if (Title === "Comunidades") {
      navigate ('/grupos')
    } else if (Title ==="Atividades"){
      navigate ('/tarefas')
    } else if (Title ==="Chat"){
      window.open('/chatbot', '_blank');

    }
    
  };

  return (
    <C.Container colorIcon={colorIcon} onClick={handleClick}>
      {Title === "Evolution" ? <EvolutionIcon /> : Title === "Água" ? <WaterIcon /> : Icon ? <Icon /> : <C.ImageProfile src={ImgSrc} />}
      <C.Label>{Title}</C.Label>
    </C.Container>
  );
};

export default ShortcutItem;
