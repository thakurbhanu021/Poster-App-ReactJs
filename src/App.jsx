import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

  const showModalHandler = () => {
    setModalIsVisible(true);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
      <div>
        <PostList onPosting={modalIsVisible} onStopPosting={hideModalHandler}/>
      </div>
    </>
  );
}

export default App;
