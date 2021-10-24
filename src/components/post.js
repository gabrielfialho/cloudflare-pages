import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Post = ({ id }) => {
  const [post, setPost] = useState({});
  console.log(post);
  useEffect(() => {
    const getPost = async () => {
      const options = {
        method: "GET",
        headers: new Headers({
          "Access-Control-Allow-Origin": "*",
        }),
        mode: "cors",
      };
      const resp = await fetch(
        `https://project.gabriel-pinto-fialho.workers.dev/posts/${id}`,
        options
      );
      const postResp = await resp.json();
      setPost(JSON.parse(postResp));
    };

    getPost();
  }, [id]);

  if (!Object.keys(post).length) return <div />;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>
        <em>Published on {post.createdAt}</em>
      </p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
};

export default Post;
