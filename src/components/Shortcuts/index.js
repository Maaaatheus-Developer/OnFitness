// Shortcuts/index.js
import React from "react";
import ShortcutItem from "../ShortcutItem";
import { FaUserFriends } from "react-icons/fa";
import { MdGroups, MdOndemandVideo } from "react-icons/md";
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FaGlassWhiskey, FaCalendarAlt } from "react-icons/fa"; // Importa o ícone do calendário
import { SiMessenger } from "react-icons/si";
import * as C from "./styles";



const Shortcuts = () => {
  return (
    <C.Container>
      <ShortcutItem ImgSrc="/matheusonfit.jpg" Title="Matheus" />
      <ShortcutItem Icon={FaUserFriends} Title="Amigos" />
      <ShortcutItem Icon={MdGroups} Title="Comunidades" />
      <ShortcutItem Icon={MdOndemandVideo} Title="Vídeos" />
      <ShortcutItem Icon={faDumbbell} Title="Evolution" />
      <ShortcutItem Icon={FaGlassWhiskey} Title="Água" />
      <ShortcutItem Icon={FaCalendarAlt} Title="Atividades" />
      <ShortcutItem Icon={SiMessenger} Title="Chat" />
    </C.Container>
  );
};  

export default Shortcuts;
