import React, { useRef, useState } from "react";
import * as C from "./styles";
import { MdCameraAlt } from "react-icons/md";
import { BiHappyAlt } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { db, storage } from "../../firebase";
import firebase from "firebase/compat/app";
import userAvatarUrl from "../../components/imagensp/matheus onfit.jpg";
import Picker from "emoji-picker-react";

const NewPost = () => {
  const [inputText, setInputText] = useState("");
  const [filePost, setFilePost] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const userName = "Matheus Minetto";
  const userEmail = "mminetto803@gmail.com";
  const fileRef = useRef(null);

  const handlePost = async (e) => {
    e.preventDefault();

    console.log(123);

    await db
      .collection("posts")
      .add({
        name: userName,
        email: userEmail,
        image: userAvatarUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        desc: inputText,
      })
      .then((doc) => {
        if (filePost) {
          const upload = storage
            .ref(`posts/${doc.id}`)
            .putString(filePost, "data_url");

          removeFile();

          upload.on(
            "state_change",
            null,
            (err) => console.log(err),
            () => {
              storage
                .ref(`posts`)
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      filePost: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    setInputText("");
    setShowEmojiPicker(false);
  };

  const handleImage = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setFilePost(readerEvent.target.result);
    };
  };

  const removeFile = () => setFilePost(null);

  const addEmoji = (e) => {
    let sym = e.unified.split("-");
    let codesArray = [];
    sym.forEach((el) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setInputText((prevText) => prevText + emoji);
  };

  return (
    <C.Container>
      <C.Div>
        <C.Image src={userAvatarUrl} />
        <C.Form>
          <C.Input
            value={inputText}
            placeholder={`No que você está pensando, ${
              userName.split(" ")[0]
            }?`}
            onChange={(e) => setInputText(e.target.value)}
          />
          <C.Button type="submit" onClick={handlePost} hidden />
        </C.Form>
        {filePost && (
          <C.DivPreview>
            <C.ImagePreview src={filePost} />
            <FaTrash color="red" onClick={removeFile} />
          </C.DivPreview>
        )}
      </C.Div>
      <C.Divider />
      <C.Div>
        <C.Div className="Btns" onClick={() => fileRef.current.click()}>
          <MdCameraAlt color="#FF8C00" />
          <C.Label>Foto/Vídeo</C.Label>
          <C.Input ref={fileRef} type="file" onChange={handleImage} hidden />
        </C.Div>
        <C.Div
          className="Btns"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <BiHappyAlt color="#FF8C00" />
          <C.Label>Sentimento/Atividade</C.Label>
          {showEmojiPicker && (
            <div style={{ position: "absolute", top: "100%", right: 0 }}>
              <Picker
                onEmojiClick={addEmoji}
                /*onEmojiClick={(event, emojiObject) => {
                  const url = emojiObject.target.src;
                  return setInputText((prevText) => prevText + url);
                }}*/
              />
            </div>
          )}
        </C.Div>
      </C.Div>
    </C.Container>
  );
};

export default NewPost;
