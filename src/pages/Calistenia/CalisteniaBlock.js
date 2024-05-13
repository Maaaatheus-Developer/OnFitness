import React from 'react';
import './Block.css';

const SubBlock = ({ title, content }) => {
  const subBlockStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginBottom: '20px', // Adicionei uma margem inferior
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    marginLeft: 'auto',
  };

  const groupTitleStyle = {
    fontSize: '1.5em',
    color: '#333',
    padding: '10px',
  };

  const contentStyle = {
    padding: '10px',
  };

  return (
    <div style={subBlockStyle}>
      <h3 style={groupTitleStyle}>{title}</h3>
      {content.map((element, index) => (
        <div key={index} style={{ ...contentStyle, borderTop: index > 0 ? '1px solid #ccc' : 'none' }}>
          {element}
        </div>
      ))}
    </div>
  );
};

const CalisteniaBlock = () => {
  const calisteniaContent = [
    {
      title: 'Treinos para Iniciantes',
      content: [
        <div key="p1">
          <p>Explore rotinas de treino de calistenia projetadas especialmente para iniciantes, ajudando a construir uma base sólida. <br /></p>
        </div>, 

        <div key="exercise1">
          <p>Flexões (push-ups):</p>
          <li>Iniciantes: 3 séries de 8 a 10 repetições</li> <br />
        </div>,

        <div key="exercise2">
          <p>Barras fixas (pull-ups) ou variações mais simples, como negativas:</p>
          <li>Iniciantes: 3 séries de 5 a 8 repetições</li> <br />
        </div>,

        <div key="exercise3">
          <p>Agachamentos (squats):</p>
          <li>Iniciantes: 3 séries de 10 a 12 repetições</li> <br />
        </div>,

        <div key="exercise4">
          <p>Dips (mergulhos em paralelas):</p>
          <li>Iniciantes: 3 séries de 8 a 10 repetições</li> <br />
        </div>,

        <div key="exercise5">
          <p>Prancha abdominal (plank):</p>
          <li>Iniciantes: 3 séries, mantendo por 20-30 segundos cada</li> <br />
        </div>,

        <div key="exercise6">
          <p>Essa rotina abrange os principais grupos musculares e ajuda a desenvolver força e resistência.</p>
          <p>Lembre-se de progredir gradualmente, aumentando o número de repetições ou a dificuldade dos exercícios à medida que se sentir mais confortável.</p>
          <p>É essencial manter uma boa forma durante os exercícios para evitar lesões.</p>
        </div>,
      ],
    },
    // Adicione mais blocos conforme necessário
  ];

  return (
    <div>
      <h2>Calistenia</h2> <br />
      {calisteniaContent.map((block, index) => (
        <SubBlock key={index} title={block.title} content={block.content} />
      ))}
    </div>
  );
};

export default CalisteniaBlock;
