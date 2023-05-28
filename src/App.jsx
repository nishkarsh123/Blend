import React, {useState} from "react";
import MainHeader from "../components/MainHeader";
import PostsList from "../components/PostsList";

function App() {
  const [viewModal, setViewModal] = useState(false);
  const onCloseHandler = () => {
    setViewModal(false);
  };
  const onOpenHandler = () => {
    setViewModal(true);
  }
  return (
    <main>
      <MainHeader onCreatePost={onOpenHandler}/>
      <PostsList onClose={onCloseHandler} viewModal={viewModal} />
    </main>
  );
}

export default App;
