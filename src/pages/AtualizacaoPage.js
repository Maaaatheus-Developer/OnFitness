import React, { useState } from 'react';
import './Page.css';

const AtualizacaoPage = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [corTexto, setCorTexto] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      setIsLoading(true); // Inicia o estado de carregamento

      // Simula um cálculo assíncrono com setTimeout
      setTimeout(() => {
        const imc = peso / (alturaMetros * alturaMetros);
        setResultado(imc.toFixed(2));

        if (imc < 18.5) {
          setMensagem('Abaixo do peso');
          setCorTexto('vermelho');
        } else if (imc < 24.9) {
          setMensagem('Peso normal');
          setCorTexto('verde');
        } else if (imc < 29.9) {
          setMensagem('Sobrepeso');
          setCorTexto('roxo');
        } else {
          setMensagem('Obesidade');
          setCorTexto('amarelo');
        }

        setIsLoading(false); // Finaliza o estado de carregamento
      }, 1000);
    }
  };

  const limparCampos = () => {
    setAltura('');
    setPeso('');
    setResultado(null);
    setMensagem('');
    setCorTexto('');
  };

  return (
    <div className="imc-calculadora" style={{ marginLeft: 'autoya' }}>
      
      <h1>Calculadora de IMC</h1>
      <div className="input-group">
        <label>Altura (cm):</label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Peso Atual(kg):</label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>
      <button onClick={calcularIMC} disabled={isLoading}>
        {isLoading ? 'Calculando...' : 'Calcular'}
      </button>
      <button onClick={limparCampos} style={{ backgroundColor: 'black', color: 'white', marginLeft: '10px' }}>
        Limpar
      </button>
      {resultado !== null && (
        <div className={`resultado ${corTexto}`}>
          <p><span>Seu IMC é: {resultado}</span></p>
          <p>Situação: {mensagem}</p>
        </div>
      )}
    </div>
  );
};

export default AtualizacaoPage;
