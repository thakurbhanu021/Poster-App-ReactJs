
import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from "./PostList.module.css";


const PostList = () => {
   const loaderData = useLoaderData();
   const posts = loaderData;

  // const addPostHandler = (postData) => {
  //   fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setPosts((existingPosts) => [postData, ...existingPosts]);
  // };
  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} text={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ alignItems: "center", color: "white" }}>
          <h1>There are no posts yet.</h1>
          <p>Start adding some!</p>
        </div>
      )}
  
    </>
  );
};
export default PostList;
