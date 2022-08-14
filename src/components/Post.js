import React from 'react'
import {UserContext} from '../App'

function Post  ({image,content,user})  {

  //const iscurrent=currentUser=== user
  return (
    <UserContext.Consumer>
      {currentUser=>(
        <>
        {image && (
          <img
            style={{ height: 100, width: 100,objectFit:'cover' }}
            src={URL.createObjectURL(image)}
            alt="posts"
          />
        )}
        <p>{content}</p>
        <div style={{color: currentUser===user&& 'green'}}>{user}</div>

      
      
      </>
      )}
        
      </UserContext.Consumer>
  )
}

export default Post