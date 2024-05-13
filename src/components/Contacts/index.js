import React, { useState } from "react";
import ContactItem from "../ContactItem";
import * as C from "./styles";
import { FiSearch } from "react-icons/fi";
import { GoKebabHorizontal } from "react-icons/go";

import Arthur from "../../components/imagensp/arthurfoto.jpg";
import Daniel from "../../components/imagensp/dani.jpg";

const items = [
  { src: Arthur, name: "Arthur Colling" },
  { src: Daniel, name: "Daniel Weber" },
];

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchClick = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  

  const inputStyles = {
    width: "120px", 
    padding: "4px", 
    marginLeft: "-3px", 
    boxSizing: "border-box",
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <C.Container>
      <C.Header>
        <C.Label>Contatos</C.Label>
        <C.HeaderIcons>
          <FiSearch onClick={handleSearchClick} />
          {isSearchVisible && (
            <input
              style={inputStyles}
              type="text"
              placeholder="Buscar"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
          <GoKebabHorizontal />
        </C.HeaderIcons>
      </C.Header>
      {filteredItems.map((item, index) => (
        <ContactItem key={index} src={item.src} name={item.name} />
      ))}
    </C.Container>
  );
};

export default Contacts;