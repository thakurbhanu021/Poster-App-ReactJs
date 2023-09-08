
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
