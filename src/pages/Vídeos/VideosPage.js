// VideosPage.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './VideosPage.css';

const VideosPage = () => {
  const videoGroups = [
    { title: 'Motivações do Dia', videos: [
      { videoId: 'k5nZMI8qTjs', title: 'Guia para alcançar seus objetivos!' },
      { videoId: 'YAhOj2jhucU', title: 'Música Motivacional' },
      { videoId: 'PROSPw8WwDc', title: 'Faça sua própria automotivação!' },
      { videoId: 'ORJwhNJAZYc', title: 'Lições estóicas para se tornar imbatível!' },
    ] },
    { title: 'Como montar o seu Treino', videos: [
      { videoId: 'Trf_-5DwYD8', title: 'Divisão de treino (Masculino)' },
      { videoId: 'uClCFf1BkzA', title: 'Técnicas ABC para uma boa divisão de Treino' },
      { videoId: 'X3n9JMml6Yg', title: 'Seríes x Exercícios, o que é melhor?' },
      { videoId: 'GXAMZzz5q0E', title: 'Divisão de treino (Feminino)' },
    ] },
    { title: 'Bíceps e Tríceps', videos: [
      { videoId: 'j4VwBKqpDHk', title: 'Treino de Bíceps' },
      { videoId: 'RZHdKEJrSwc', title: 'Treino de Tríceps' },
    ] },
  ];

  return (
    <div>
      <h1>Vídeos para mudar seu dia!</h1>

      {/* Navegação para os grupos de vídeos */}
      <ul className="nav-list">
        {videoGroups.map((group, groupIndex) => (
          <li key={groupIndex}>
            <ScrollLink to={`group-${groupIndex}`} smooth={true} duration={500}>
              {group.title}
            </ScrollLink>
          </li>
        ))}
      </ul>

      {/* Grupos de vídeos */}
      {videoGroups.map((group, groupIndex) => (
        <div key={groupIndex} id={`group-${groupIndex}`}>
          <h2>{group.title}</h2>
          <div className="video-group">
            {group.videos.map((video, videoIndex) => (
              <div key={videoIndex} className="video-card">
                <h3>{video.title}</h3>
                <iframe
                  title={`Video-${groupIndex}-${videoIndex}`}
                  width="450"
                  height="280"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideosPage;
