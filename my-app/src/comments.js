import React from 'react';

const Comments = (props) => {
  return (
    <div className="comments">
      <p>Comments:</p>
      <ul>
        {props.comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
    
  );
};

export default Comments;