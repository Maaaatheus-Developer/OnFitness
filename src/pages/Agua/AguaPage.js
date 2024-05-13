import React, { useState } from 'react';
import { styles } from './AguaPage.styles'; 

const AguaPage = () => {
  const [peso, setPeso] = useState('');
  const [quantidadeAgua, setQuantidadeAgua] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const calcularQuantidadeAgua = () => {
    const fatorConversao = 35;
    const pesoEmKg = parseFloat(peso);

    if (!isNaN(pesoEmKg) && pesoEmKg > 0) {
      setIsLoading(true);

      setTimeout(() => {
        const resultado = pesoEmKg * fatorConversao;
        setQuantidadeAgua(resultado);
        setIsLoading(false);
      }, 1000); 
    } else {
      setQuantidadeAgua(null);
      alert('Por favor, insira um valor de peso válido.');
    }
  };

  const limparResultado = () => {
    setPeso('');
    setQuantidadeAgua(null);
  };

  return (
    <div style={styles.container}>
      <h1>Calculadora de Ingestão de Água</h1>
      <label style={styles.label}>
        Peso Corporal (kg):
        <input
          type="text"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          style={styles.input}
        />
      </label>
      <button
        onClick={calcularQuantidadeAgua}
        style={{ ...styles.button, ...(isLoading && styles.buttonHover) }}
      >
        {isLoading ? 'Calculando...' : 'Calcular'}
      </button>
      <button onClick={limparResultado} style={styles.clearButton}>
        Limpar
      </button>
      {quantidadeAgua !== null && (
        <div style={styles.resultContainer}>
          <h2 style={styles.resultTitle}>Quantidade Recomendada de Água:</h2>
          <p style={styles.resultValue}>{quantidadeAgua.toFixed(2)} ml por dia</p>
        </div>
      )}
    </div>
  );
};

export default AguaPage;
