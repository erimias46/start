import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

export const UserContext= React.createContext();


const functionsCount=new Set();

function App() {
  const [user, setUser] = useState("reed");
  const [posts, setPosts] = useState([]);
 
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
    <UserContext.Provider value={user}>
      <Header user={user} setUser={setUser} />
      <CreatePost user={user} handleAddpost={handleAddpost}  />
      <PostList  posts={posts} />

     
    </UserContext.Provider>
  );
}

export default App;
