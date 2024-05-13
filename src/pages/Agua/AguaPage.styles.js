export const styles = {
    clearButton: {
      background: 'black',
      color: '#fff',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginLeft: '10px',
      transition: 'background 0.3s ease, transform 0.3s ease', // Adiciona transição para a cor de fundo e transform
      outline: 'none',
      '&:hover': {
        background: '#333', // Cor de fundo ao passar o mouse
        transform: 'scale(1.05)', // Efeito de escala ao passar o mouse
      },
    },
    container: {
      maxWidth: '400px',
      margin: '0 auto', //Estava como '0 auto', deixei como center
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      //marginLeft: '510px' //Está desformatando ao diminuir o zoom da tela
    },
    label: {
      display: 'block',
      marginBottom: '10px',
    },
    input: {
      width: '100%',
      padding: '8px',
      fontSize: '16px',
    },
    button: {
      background: '#FF8C00',
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background 0.3s ease, transform 0.3s ease', // Adiciona transição para a cor de fundo e transform
      marginRight: '10px',
      outline: 'none',
      '&:hover': {
        background: '#FFA500', // Cor de fundo ao passar o mouse
        transform: 'scale(1.05)', // Efeito de escala ao passar o mouse
      },
    },
    resultContainer: {
      marginTop: '20px',
      padding: '15px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f5f5f5',
      textAlign: 'center',
    },
    resultTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    resultValue: {
      fontSize: '24px',
      color: 'black',
    },
    clearButtonContainer: {
      marginTop: '20px',
    },
  };
  