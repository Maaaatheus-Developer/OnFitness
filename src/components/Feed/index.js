import React from "react";
import * as C from "./styles";
import NewPost from "../NewPost";
import Posts from "../Posts";




const Feed = () => {
  return (
    <C.Container>
     <NewPost />
      <Posts />
    </C.Container>
  );
};

export default Feed;
