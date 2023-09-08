import React from "react";
import ReactDOM from "react-dom/client";
import Posts , {loader as postsLoader} from "./Routes/Posts";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./Routes/RootLoyout";
import NewPost ,{action as newPostAction} from "./Routes/NewPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [{ path: "/new-post", element: <NewPost /> , action: newPostAction}],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
