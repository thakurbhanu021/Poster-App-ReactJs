import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

const PostList = ({ onPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };
  return (
    <>
      {onPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost onClose={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : null}
      
      <ul className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.body} author={post.author} text={post.body} />
        ))}
      </ul>
    </>
  );
};
export default PostList;
