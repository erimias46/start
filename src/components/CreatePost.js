import React, { useRef, useState } from "react";

function CreatePost({ user,handleAddpost}) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const imageinputref = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const post = {content, image,user};
    // const newPosts = [post, ...posts];
    // setPosts(newPosts);

    handleAddpost(post);
    setContent("");
    imageinputref.current.value = "";
  }

  return (
    <div>
      <h1>CreatePost</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setContent(event.target.value)}
          placeholder="Add Post content"
          value={content}
        />
        <input
          type="file"
          onChange={(event) => setImage(event.target.files[0])}
          ref={imageinputref}
        />

        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
}

export default CreatePost;
