import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import Post from "../Post";

const Posts = () => {
  const [realtimePosts, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <>
      {!error &&
        realtimePosts.docs.map((rawpost) => {
          const post = rawpost.data();
          //console.log(rawpost.id);
          //console.log(post);
          return (
            <Post
              key={rawpost.id}
              postId={rawpost.id}
              name={post?.name}
              desc={post?.desc}
              timestamp={post?.timestamp}
              image={post?.image}
              filePost={post?.filePost}
            />
          );
        })}
    </>
  );
};

export default Posts;
