import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "@reach/router";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const options = {
        method: "GET",
        headers: new Headers({
          "Access-Control-Allow-Origin": "*",
        }),
        mode: "cors",
      };
      const resp = await fetch(
        "https://project.gabriel-pinto-fialho.workers.dev/posts",
        options
      );
      let postsResp = await resp.json();
      postsResp = postsResp.sort(function (a, b) {
        return (
          moment(a.createdAt, "MMMM Do YYYY, h:mm:ss a") -
          moment(b.createdAt, "MMMM Do YYYY, h:mm:ss a")
        );
      });

      setPosts(postsResp);
    };

    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h2>
        </div>
      ))}
      <label>
        <Link to={`/posts/create`}>Create a new post</Link>
      </label>
    </div>
  );
};

export default Posts;
