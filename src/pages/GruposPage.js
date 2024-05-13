import React from 'react';
import { Link } from 'react-scroll';
import CalisteniaBlock from './Calistenia/CalisteniaBlock';
import NutricaoBlock from '../Nutrição/NutricaoBlock';
import MusculacaoBlock from '../Musculação/MusculacaoBlock';
import './GruposPage.css';

const GruposPage = () => {
  return (
    <div>
      <h1>Comunidades Fitness</h1>
      <ul className="nav-list">
        <li>
          <Link to="calistenia" smooth={true} duration={500}>
            Grupo de Calistenia
          </Link>
        </li>
        <li>
          <Link to="nutricao" smooth={true} duration={500}>
            Grupo de Nutrição
          </Link>
        </li>
        <li>
          <Link to="musculacao" smooth={true} duration={500}>
            Grupo de Musculação
          </Link>
        </li>
      </ul>

      {/* Seção para Calistenia */}
      <div id="calistenia">
        <CalisteniaBlock />
      </div>

      {/* Seção para Nutrição */}
      <div id="nutricao">
        <NutricaoBlock />
      </div>

      {/* Seção para Musculação */}
      <div id="musculacao">
        <MusculacaoBlock />
      </div>

    </div>
  );
};

export default GruposPage;
