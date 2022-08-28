import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createPost,
  getAllPosts,
  deletePost,
  editPost,
  getPost,
} from "../actions/postActions";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);

  const handlePost = (e) => {
    e.preventDefault();
    if ((title, body)) {
      dispatch(createPost({ title, body }));
      setTitle("");
      setBody("");
    }
  };

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          value={body}
          placeholder="Body"
          onChange={(e) => setBody(e.target.value)}
        />
        <button onClick={handlePost}>{"create"}</button>
      </form>

      {posts.posts.map((item) => {
        return (
          <div key={item._id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <button onClick={() => dispatch(deletePost(item._id))}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
