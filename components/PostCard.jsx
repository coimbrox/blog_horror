import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div>
      {post.titulo}
      {post.excrept}

    </div>
  )
}

export default PostCard