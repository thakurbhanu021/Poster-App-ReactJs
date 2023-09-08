
import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";

function Posts() {
  return (
    <>
    <Outlet/>
      <div>
        <PostList/>
      </div>
    </>
  );
}

export default Posts;

export const loader = async() => {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();

  return resData.posts;
};
