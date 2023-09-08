import { useEffect, useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import Modal from "./Modal";

const PostList = ({ onPosting, onStopPosting }) => {
  const [posts, setPosts] = useState([]);
  const [isFetching , setIsFetching] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      // setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts)
      setIsFetching(false);
    };

    fetchPosts();
  }, []);

  const addPostHandler = (postData) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };
  return (
    <>
      {onPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost onClose={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      ) : null}
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} text={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ alignItems: "center", color: "white" }}>
          <h1>There are no posts yet.</h1>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching &&  <div style={{ alignItems: "center", color: "white" }}>
          <p>Loading posts..</p>
        </div>}
    </>
  );
};
export default PostList;
