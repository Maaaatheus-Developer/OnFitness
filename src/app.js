import React from 'react';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import Body from './components/Body';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AtualizacaoPage from './pages/AtualizacaoPage';
import VideosPage from './pages/Vídeos/VideosPage'; 
import GruposPage from './pages/GruposPage';
import AguaPage from './pages/Agua/AguaPage'; 
import TaskList from './ListaTarefas/TaskList';
import ChatBot from './components/ChatBot1/ChatBot';


const App = () => {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} /> {/*Recebimento de todos os componentes presente no corpo*/}
          <Route path="/atualizacao" element={<AtualizacaoPage />} /> {/*Minha rota para a página da calculadora de IMC */}
          <Route path="/videos" element={<VideosPage />} /> {/*Minha rota para a página de Vídeos */}
          <Route path="/grupos" element={<GruposPage />} /> {/* Minha rota para a página de Grupos */}
          <Route path="/agua" element={<AguaPage />} /> {/* Minha rota para a calculadora corporal*/}
          <Route path="/tarefas" element={<TaskList />} />  {/* Minha rota para a lista de atividades*/}
          <Route path="/chatbot" element={<ChatBot />} /> {/* Minha rota para o chat*/}


        </Routes>
        <GlobalStyles />
      </>
    </Router>
  );
};

export default App;
