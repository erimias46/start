import React from 'react'

function Post  ({image,content,user})  {
  return (
    <>
        {image && (
          <img
            style={{ height: 100, width: 100 }}
            src={URL.createObjectURL(image)}
            alt="posts"
          />
        )}
        <p>{content}</p>
        <div>{user}</div>
      </>
  )
}

export default Post