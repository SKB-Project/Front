import React from "react";
import './Community.css';

const Posts = ({ posts, loading }) => {
  return (
    <>
      {loading && <div> loading... </div>}
        {posts.map((post) => (
          <div className="list_gird list_data" key={post.id}>{post.title}</div>
        ))}
    </>
  );
};
export default Posts;