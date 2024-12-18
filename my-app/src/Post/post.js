import React, { useState } from 'react';
import Comments from './comments';

const Post = () => {
  const post = "This is a comment.";

  const comments = [
    { id: 1, text: 'Wow' },
    { id: 2, text: 'Amazing' },
    { id: 3, text: 'Impressive' },
    { id: 4, text: 'Neat' },
    { id: 5, text: 'Cool' },
  ];

  return (
    <div className="post">
      <h2>{post}</h2>
      <Comments comments={comments} />
    </div>
  );
};

export default Post;