import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

const functionsCount=new Set();

function App() {
  const [user, setUser] = useState("reed");
  const [posts, setPosts] = useState([]);
  const [count, setCount]=useState(0)
  useEffect(() => {
    document.title = user ? `${user}'s feed` : `Please login`;
  }, [user]);

   const handleAddpost= useCallback((newpost)=>{
    setPosts([newpost,...posts])

  },[posts])
functionsCount.add(handleAddpost);
console.log(functionsCount)
  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} handleAddpost={handleAddpost}  />
      <PostList posts={posts} />


      <button onClick={()=>{setCount(prev=>prev+1)}}>{count} + </button>
    </>
  );
}

export default App;
