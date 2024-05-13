import React from "react";
import * as C from "./styles";
import Shortcuts from "../Shortcuts";
import Feed from "../Feed";
import Contacts from "../Contacts";



const Body = () => {
    return (
       <C.Container>
        <Shortcuts />
        <Feed />
        <Contacts />
      </C.Container>
    );
  };
  
  export default Body;