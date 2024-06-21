import React from "react";

const BlogPagePost = ({ params }) => {
  return (
    <main>
      <h1>Blog Page Post</h1>
      <p>{params.slug}</p>
    </main>
  );
};

export default BlogPagePost;
