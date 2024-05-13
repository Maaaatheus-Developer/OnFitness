import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as C from './styles';
import { MdOndemandVideo, MdHome, MdGroups, MdNotifications } from 'react-icons/md';
import HeaderIcon from '../HeaderIcon';
import logoImage from '../../imagens/Nome padrão em Preto.png';

const Header = () => {
  const location = useLocation();
  const isChatBotRoute = location.pathname === '/chatbot';

  if (isChatBotRoute) {
    // Se for a rota do ChatBot, não renderize o conteúdo do cabeçalho
    return null;
  }

  return (
    <C.Container>
      <C.Content>
        <C.Section className="section1">
          <C.Content className="teste">
            <img
              src={logoImage}
              alt="Logo"
              style={{ width: '170px', height: '170px' }}
            />
          </C.Content>
          <C.Content></C.Content>
        </C.Section>

        <C.Section className="section2">
          <Link to="/">
            <HeaderIcon Icon={MdHome} active={location.pathname === '/'} />
          </Link>
          <Link to="/videos">
            <HeaderIcon Icon={MdOndemandVideo} active={location.pathname === '/videos'} />
          </Link>
          <Link to="/grupos">
            <HeaderIcon Icon={MdGroups} active={location.pathname === '/grupos'} />
          </Link>
        </C.Section>

        <C.Section className="section3">
          <C.Div></C.Div>
          <HeaderIcon Icon={MdNotifications} section="section3" />
        </C.Section>
      </C.Content>
    </C.Container>
  );
};

export default Header;
