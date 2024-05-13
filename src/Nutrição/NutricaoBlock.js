import React from "react";

const SubBlock = ({ title, content }) => {
  const subBlockStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginBottom: "20px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    marginLeft: "-20px", // Adiciona margem à esquerda automática para alinhar à direita
    width: "calc(100% + 40px)", // Largura total da página, considerando a margem à esquerda
  };

  const groupTitleStyle = {
    fontSize: "1.5em",
    color: "#333",
    padding: "10px",
  };

  const contentStyle = {
    padding: "10px",
    borderTop: "5px solid black",
    
  };

  return (
    <div style={subBlockStyle}>
      <h3 style={groupTitleStyle}>{title}</h3>
      {content.map((element, index) => (
        <div key={index} style={contentStyle}>
          {element}
        </div>
      ))}
    </div>
  );
};

const NutricaoBlock = () => {
  const nutricaoContent = [
    {
      title: "Importância da Nutrição",
      content: [
        <div key="AlimentacaoSaudavel">
          <h4>Dicas para uma Alimentação Saudável:</h4>
          <ul>
            Inclua uma variedade de alimentos em suas refeições para garantir
            uma gama completa de nutrientes.
            <br />
            Mantenha-se hidratado bebendo água ao longo do dia. Evite o consumo
            excessivo de alimentos processados e ricos em açúcar.
          </ul>
          <br />
          <h4>Manutenção do Peso Corporal Adequado:</h4>
          <ul>
            Uma dieta equilibrada contribui para a manutenção de um peso
            corporal saudável.
            <br />O excesso de calorias pode levar ao ganho de peso, enquanto a
            falta de calorias pode resultar em desnutrição.
          </ul>
          <br />
          <h4>Prevenção de Doenças:</h4>
          <ul>
            Uma boa nutrição desempenha um papel crucial na prevenção de várias
            doenças crônicas, como diabetes, doenças cardíacas, hipertensão e
            certos tipos de câncer.
          </ul>{" "}
          <br />
          <h4>Melhoria da Saúde Mental:</h4>
          <ul>
            Há uma crescente compreensão da conexão entre a nutrição e a saúde
            mental. <br />
            Uma dieta equilibrada pode influenciar positivamente o humor, a
            cognição e a prevenção de transtornos mentais.
          </ul>{" "}
          <br />
          <h4>Regulação do Açúcar no Sangue:</h4>
          <ul>
            {" "}
            Escolhas alimentares saudáveis ajudam a manter níveis estáveis de
            açúcar no sangue, prevenindo assim problemas como diabetes tipo 2.{" "}
          </ul>{" "}
          <br />
          <h4>Promoção da Longevidade e Qualidade de Vida:</h4>
          <ul>
            Uma dieta balanceada, combinada com um estilo de vida saudável, está
            associada a uma maior expectativa de vida e a uma melhor qualidade
            de vida ao longo do tempo.
          </ul>
        </div>,
      ],
    },
    {
      title: "Nutrientes Essenciais",
      content: [
        <div key="NutrientesEssenciais">
          <h4>Proteínas</h4>
          <ul>São essenciais para a construção e reparo de tecidos.</ul>
          <ul>
            Fontes incluem carne magra, ovos, laticínios, legumes e nozes.
          </ul>
          <br /> <hr />
          <h4>Fibras</h4>
          <ul>
            {" "}
            Função: Melhorar a digestão, promover a saciedade, prevenir
            constipação.
          </ul>
          <ul> Fontes: Frutas, vegetais, grãos integrais, leguminosas.</ul>
          <br /> <hr />
          <h4>Vitaminas</h4>
          <ul>
            {" "}
            Função: Regulação de processos metabólicos, suporte ao sistema
            imunológico.
          </ul>
          <ul>
            Fontes: Frutas, vegetais, produtos de origem animal, grãos
            integrais.
          </ul>
          <br /> <hr />
          <h4>Minerais</h4>
          <ul>
            Função: Manutenção da saúde óssea, equilíbrio hídrico, função
            nervosa e muscular.
          </ul>
          <ul>
            Fontes: Carnes, laticínios, legumes, frutas, vegetais, nozes e
            sementes.
          </ul>
          <br /> <hr />
          <h4>Água</h4>
          <ul>
            Função: Hidratação, transporte de nutrientes, regulação da
            temperatura corporal.
          </ul>
          <ul>
            Fontes: Água potável, frutas e vegetais com alto teor de água.
          </ul>
          <br /> <hr />
          <h4>Antioxidantes</h4>
          <ul>Função: Proteção contra danos causados pelos radicais livres.</ul>
          <ul>
            {" "}
            Fontes: Frutas e vegetais coloridos, chá verde, nozes, sementes.
          </ul>
        </div>,
      ],
    },
    {
      title: "Princípios da Nutrição",
      content: [
        <div key="PrincipiosNutricao">
          <p>
            Consumir uma variedade de alimentos para garantir a ingestão de
            todos os nutrientes essenciais.{" "}
          </p>
          <ul>
            <p>
              Um modelo de prato ideal é composto por metade dele de vegetais,
              1/4 carboidrato e 1/4 proteína. <br />
              <br />
              Ele pode se adequar a boa parte da população para uma boa
              manutenção de saúde” explica a nutricionista esportiva Carolina
              Ragugnetti. <br />
            </p>
          </ul>
          <ul>
            Os princípios da nutrição são diretrizes essenciais para uma
            alimentação saudável. <br /> <br />
            A variedade e o equilíbrio na escolha de alimentos garantem a
            ingestão de diversos nutrientes, enquanto a moderação e controle das
            porções contribuem para a manutenção de um peso saudável. <br />{" "}
            <br />
            A hidratação adequada, a busca por nutrientes essenciais e a
            preferência por alimentos frescos e minimamente processados também
            são fundamentais. <br /> <br />
            Adaptar a dieta às necessidades individuais, planejar e preparar
            refeições, desenvolver consciência alimentar e buscar qualidade em
            vez de quantidade são aspectos-chave para promover o bem-estar e a
            saúde. <br />
          </ul>
        </div>,
      ],
    },
    {
      title: "Dietas Específicas",
      content: [
        <div key="DietasEspecificas">
          <h4>
            Dieta Mediterrânea: Uma Abordagem Saudável para o Estilo de Vida
          </h4> <br />
          <ul>
            A Dieta Mediterrânea é conhecida por seus benefícios à saúde
            cardiovascular. <br /> <br />
            Baseada nos padrões alimentares de países mediterrâneos, como
            Grécia, Itália e Espanha, essa dieta enfatiza o consumo de frutas,
            vegetais, azeite de oliva, peixe e nozes. Reduzindo a ingestão de
            carne vermelha e alimentos processados, a Dieta Mediterrânea promove
            uma variedade de nutrientes essenciais e ácidos graxos saudáveis,
            contribuindo para a longevidade e a prevenção de doenças cardíacas.
          </ul>{" "}
          <br /> <hr />
          <h4> Dieta Cetogênica: Queimando Gordura para Energia</h4> <br />
          <ul>
            A Dieta Cetogênica é caracterizada por uma ingestão extremamente
            baixa de carboidratos, promovendo a cetose, um estado em que o corpo
            queima gordura para obter energia.
            <br /> <br />
            Ao consumir principalmente gorduras saudáveis, proteínas e vegetais
            com baixo teor de carboidratos, a dieta cetogênica tem sido
            associada à perda de peso rápida e à melhoria da saúde metabólica.{" "}
            <br /> <br />
            No entanto, é importante monitorar cuidadosamente a ingestão de
            nutrientes e consultar um profissional de saúde ao seguir essa dieta
            devido a possíveis efeitos colaterais.
          </ul>{" "}
          <br /> <hr />
          <h4>Dieta Sem Glúten: Uma Opção para Intolerância ao Glúten</h4> <br />
          <ul>
            Indivíduos com doença celíaca ou sensibilidade ao glúten adotam a
            Dieta Sem Glúten, excluindo trigo, cevada, centeio e seus derivados.{" "}
            <br /> <br />
            Essa dieta visa aliviar sintomas gastrointestinais e promover a
            saúde digestiva. Ao fazer escolhas alimentares conscientes,
            incluindo alternativas sem glúten, como quinoa e farinha de amêndoa,
            as pessoas podem desfrutar de uma dieta variada e equilibrada.
          </ul>
        </div>,
      ],
    },
  ];

  const containerStyle = {
    maxWidth: "none", // Remova a largura máxima para ocupar a largura total da página
    margin: "0 auto",
    padding: "20px",
  };

  return (
    <div className="nutricao-container" style={containerStyle}>
      <h2 style={{ marginLeft: "-20px" }}>Nutrição</h2> <br />
      {nutricaoContent.map((block, index) => (
        <SubBlock key={index} title={block.title} content={block.content} />
      ))}
    </div>
  );
};

export default NutricaoBlock;
