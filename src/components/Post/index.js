import React, { useState, useEffect } from "react";
import * as C from "./styles";
import { GoKebabHorizontal } from "react-icons/go";
import { BiLike, BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { FaTrash } from "react-icons/fa"; // Importa o ícone de lixeira para excluir
import { db } from "../../firebase";

const Post = ({ postId, name, timestamp, image, desc, filePost }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  useEffect(() => {
    const postRef = db.collection("posts").doc(postId);

    postRef.get().then((doc) => {
      if (doc.exists) {
        const post = doc.data();
        setLiked(post.liked);
        setLikeCount(post.likeCount || 0);
      }
    });
  }, [postId]);

  const handleLikeClick = () => {
    debugger;
    const postRef = db.collection("posts").doc(postId);
    const newLikeCount = liked ? likeCount - 1 : likeCount + 1;

    postRef.update({
      liked: !liked,
      likeCount: newLikeCount,
    });

    setLiked(!liked);
    setLikeCount(newLikeCount);
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm(
      "Tem certeza de que deseja excluir esta postagem?"
    );

    if (confirmDelete) {
      db.collection("posts")
        .doc(postId)
        .delete()
        .then(() => {
          console.log("Postagem excluída com sucesso!");
        })
        .catch((error) => {
          console.error("Erro ao excluir a postagem: ", error);
        });
    }
  };

  return (
    <C.Container>
      <C.Header>
        <C.SectionHeader>
          <C.Image src={image} alt="Profile" />
          <C.divNameTime>
            <C.Name>{name}</C.Name>
            <C.Timestamp>
              {new Date(timestamp?.toDate()).toLocaleString()}
            </C.Timestamp>
          </C.divNameTime>
        </C.SectionHeader>
        <C.SectionHeader>
          <GoKebabHorizontal
            color="#646464"
            onClick={() => setShowDeleteIcon(!showDeleteIcon)}
          />
          {showDeleteIcon && (
            <FaTrash color="red" onClick={handleDeleteClick} />
          )}
        </C.SectionHeader>
      </C.Header>
      <C.Desc>{desc}</C.Desc>
      {filePost && (
        <C.SectionImage>
          <C.ImagePost src={filePost} />
        </C.SectionImage>
      )}
      <C.Divider />
      <C.footer>
        <C.DivButtons>
          <BiLike
            color={liked ? "rgb(255, 140, 0)" : "rgb(255, 140, 0)"}
            onClick={handleLikeClick}
          />
          <C.LabelButtons>
            Curtir {likeCount > 0 && `(${likeCount})`}
          </C.LabelButtons>
        </C.DivButtons>
        <C.DivButtons>
          <BiComment color="#65676b" style={{ marginTop: "2px" }} />
          <C.LabelButtons>Comentar</C.LabelButtons>
        </C.DivButtons>
        <C.DivButtons>
          <RiShareForwardLine color="#65676b" />
          <C.LabelButtons>Compartilhar</C.LabelButtons>
        </C.DivButtons>
      </C.footer>
    </C.Container>
  );
};

export default Post;
