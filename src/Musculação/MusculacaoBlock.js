import React from 'react';

const MusculacaoBlock = () => {
  const exerciseStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
  };

  const groupTitleStyle = {
    fontSize: '1.5em',
    color: '#333',
  };

  const exerciseListStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const exerciseItemStyle = {
    marginBottom: '10px',
    fontSize: '1.2em',
  };

  return (
    <div id="musculacao"> {/* Adiciona o id à seção de Musculação */}
      <h2>Musculação</h2>
      <br />
      <h3>Treinos para iniciantes</h3>

      <div style={exerciseStyle}>
        <h3 style={groupTitleStyle}>Peito</h3>
        <ul style={exerciseListStyle}>
          <li style={exerciseItemStyle}>Supino reto: 4 séries de 10 repetições</li>
          <li style={exerciseItemStyle}>Flexão de braço: 3 séries até a falha</li>
          <li style={exerciseItemStyle}>Supino inclinado: 4 séries de 12 repetições</li>
        </ul>
      </div>

      <div style={exerciseStyle}>
        <h3 style={groupTitleStyle}>Costas</h3>
        <ul style={exerciseListStyle}>
          <li style={exerciseItemStyle}>Puxada alta: 4 séries de 12 repetições</li>
          <li style={exerciseItemStyle}>Remada: 3 séries de 10 repetições</li>
          <li style={exerciseItemStyle}>Levantamento terra: 3 séries de 8 repetições</li>
        </ul>
      </div>

      <div style={exerciseStyle}>
        <h3 style={groupTitleStyle}>Pernas</h3>
        <ul style={exerciseListStyle}>
          <li style={exerciseItemStyle}>Agachamento: 4 séries de 12 repetições</li>
          <li style={exerciseItemStyle}>Leg press: 3 séries de 15 repetições</li>
          <li style={exerciseItemStyle}>Cadeira extensora: 3 séries de 12 repetições</li>
        </ul>
      </div>

      <div style={exerciseStyle}>
        <h3 style={groupTitleStyle}>Braços</h3>
        <ul style={exerciseListStyle}>
          <li style={exerciseItemStyle}>Curl de bíceps: 3 séries de 12 repetições</li>
          <li style={exerciseItemStyle}>Tríceps pulley: 3 séries de 10 repetições</li>
          <li style={exerciseItemStyle}>Flexão de tríceps: 3 séries até a falha</li>
        </ul>
      </div>

      <div style={exerciseStyle}>
        <h3 style={groupTitleStyle}>Ombros</h3>
        <ul style={exerciseListStyle}>
          <li style={exerciseItemStyle}>Desenvolvimento com halteres: 4 séries de 10 repetições</li>
          <li style={exerciseItemStyle}>Elevação lateral: 3 séries de 12 repetições</li>
          <li style={exerciseItemStyle}>Encolhimento de ombros: 3 séries de 15 repetições</li>
        </ul>
      </div> 

      <h3>Treinos para intermediários</h3>

<div style={exerciseStyle}>
  <h3 style={groupTitleStyle}>Peito</h3>
  <ul style={exerciseListStyle}>
    <li style={exerciseItemStyle}>Supino inclinado com halteres: 4 séries de 10 repetições</li>
    <li style={exerciseItemStyle}>Crucifixo: 3 séries de 12 repetições</li>
    <li style={exerciseItemStyle}>Pullover: 3 séries de 10 repetições</li>
  </ul>
</div>

{/* Adicione mais blocos intermediários conforme necessário para outros grupos musculares */}

{/* Bloco de treinos para intermediários finalizado */}

<div style={exerciseStyle}>
  <h3 style={groupTitleStyle}>Costas</h3>
  <ul style={exerciseListStyle}>
    <li style={exerciseItemStyle}>Barra fixa pronada: 4 séries de 8 repetições</li>
    <li style={exerciseItemStyle}>Puxada horizontal na polia: 3 séries de 10 repetições</li>
    <li style={exerciseItemStyle}>Remada unilateral com halteres: 4 séries de 12 repetições por lado</li>
  </ul>
</div>

<div style={exerciseStyle}>
  <h3 style={groupTitleStyle}>Ombros</h3>
  <ul style={exerciseListStyle}>
    <li style={exerciseItemStyle}>Desenvolvimento militar com barra: 4 séries de 8 repetições</li>
    <li style={exerciseItemStyle}>Elevação frontal com halteres: 3 séries de 12 repetições</li>
    <li style={exerciseItemStyle}>Remada alta: 4 séries de 10 repetições</li>
  </ul>
</div>

<div style={exerciseStyle}>
  <h3 style={groupTitleStyle}>Pernas</h3>
  <ul style={exerciseListStyle}>
    <li style={exerciseItemStyle}>Agachamento livre: 4 séries de 10 repetições</li>
    <li style={exerciseItemStyle}>Leg press inclinado: 3 séries de 12 repetições</li>
    <li style={exerciseItemStyle}>Cadeira extensora: 4 séries de 10 repetições</li>
  </ul>
</div>

<div style={exerciseStyle}>
  <h3 style={groupTitleStyle}>Braços</h3>
  <ul style={exerciseListStyle}>
    <li style={exerciseItemStyle}>Curl de bíceps com barra: 4 séries de 10 repetições</li>
    <li style={exerciseItemStyle}>Tríceps testa com barra: 3 séries de 12 repetições</li>
    <li style={exerciseItemStyle}>Rosca direta alternada com halteres: 3 séries de 12 repetições por braço</li>
  </ul>
</div>

<h3>Treinos para avançados</h3>

<div style={exerciseStyle}>
  <h3 style={groupTitleStyle}>Peito (Avançado)</h3>
  <ul style={exerciseListStyle}>
    <li style={exerciseItemStyle}>Supino Declinado com Halteres: 4 séries de 8 repetições</li>
    <li style={exerciseItemStyle}>Flinch Press: 3 séries de 10 repetições</li>
    <li style={exerciseItemStyle}>Supino com Pegada Fechada: 4 séries de 10 repetições</li>
  </ul>
</div>

<div style={exerciseStyle}>
  <h3 style={groupTitleStyle}>Costas (Avançado)</h3>
  <ul style={exerciseListStyle}>
    <li style={exerciseItemStyle}>Levantamento Terra: 4 séries de 6 repetições</li>
    <li style={exerciseItemStyle}>Barra Fixa com Peso Adicional: 3 séries de 8 repetições</li>
    <li style={exerciseItemStyle}>Puxada Horizontal Unilateral na Polia Baixa: 4 séries de 10 repetições por braço</li>
  </ul>
</div>

<div style={exerciseStyle}>
  <h3 style={groupTitleStyle}>Ombros (Avançado)</h3>
  <ul style={exerciseListStyle}>
    <li style={exerciseItemStyle}>Press Militar com Barra: 4 séries de 6 repetições</li>
    <li style={exerciseItemStyle}>Elevação Lateral com Halteres: 3 séries de 10 repetições</li>
    <li style={exerciseItemStyle}>Desenvolvimento Arnold: 4 séries de 8 repetições</li>
  </ul>
</div>


<div style={exerciseStyle}>
  <h3 style={groupTitleStyle}>Pernas (Avançado)</h3>
  <ul style={exerciseListStyle}>
    <li style={exerciseItemStyle}>Agachamento Olímpico: 4 séries de 6 repetições</li>
    <li style={exerciseItemStyle}>Avanço com Barra: 3 séries de 10 repetições por perna</li>
    <li style={exerciseItemStyle}>Cálice Squat (Agachamento com Halteres): 4 séries de 8 repetições</li>
    <li style={exerciseItemStyle}>Prensa 45 graus: 4 séries de 8 repetições</li>
    <li style={exerciseItemStyle}>Cadeira Flexora Unilateral: 3 séries de 12 repetições por perna</li>
  </ul>
</div>

<div style={exerciseStyle}>
  <h3 style={groupTitleStyle}>Braços (Avançado)</h3>
  <ul style={exerciseListStyle}>
    <li style={exerciseItemStyle}>Curl de Bíceps com Barra Zig-Zag: 4 séries de 8 repetições</li>
    <li style={exerciseItemStyle}>Tríceps na Máquina Scott: 3 séries de 10 repetições</li>
    <li style={exerciseItemStyle}>Rosca Scott com Halteres: 4 séries de 10 repetições</li>
    <li style={exerciseItemStyle}>Tríceps Testa com Halteres: 3 séries de 12 repetições</li>
    <li style={exerciseItemStyle}>Curl Martelo Invertido: 3 séries de 10 repetições por braço</li>
  </ul>
</div>




    </div>
  );
};

export default MusculacaoBlock;
