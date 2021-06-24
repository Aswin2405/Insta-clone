import React, { useState, useEffect } from "react";
import "./Post.css";
import { db } from "./firebase";
import Avatar from "@material-ui/core/Avatar";
import firebase from "firebase";
function Post({ postId, user, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot(snapshot => {
          setComments(snapshot.docs.map(doc => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = event => {
    event.preventDefault();
    db.collection("posts")
      .doc(postId)
      .collection("comments")
      .add({
        text: comment,
        username: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    setComment("");
  };

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt="Aswin"
          src="data:image/jpeg;base64,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"
        />
        <h3>{username}</h3>
      </div>
      <img className="post__image" src={imageUrl} alt="" />
      <h4 className="post__text">
        <strong>{username}</strong>
        {caption}
      </h4>
      <div className="post__comments">
        {comments.map(comment => (
          <p>
            <strong>{comment.username}</strong>
            {comment.text}
          </p>
        ))}
      </div>
      {user && (
        <form className="post__commentBox">
          <input
            className="post__input"
            type="text"
            placeholder="Add a Comment..."
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <button
            className="post__button"
            disabled={!comment}
            type="submit"
            onClick={postComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
