import React, { useState } from "react";
import { Link } from "@reach/router";

import axios from "axios";

const Create = () => {
  const [post, setPost] = useState({});
  const [title, setTitle] = useState({});
  const [username, setUsername] = useState({});
  const [content, setContent] = useState({});

  const putPost = async () => {
    const resp = await axios.post(
      `https://project.gabriel-pinto-fialho.workers.dev/posts/`,
      { title, username, content }
    );
    console.log(resp.data.message);

    if (!resp.data || resp.data.message !== "Success")
      return "An error ocurred. Please try again";
    else {
      setPost(resp.data.post);
      return "Post succesfully created";
    }
  };

  const handleSubmit = async () => {
    putPost().then((response) => alert(response));
  };

  return (
    <div>
      <message
        success={true}
        header="Form completed"
        content="Thank you for your contribution."
      />
      <h1>Create Post</h1>
      <form>
        <label>
          Title:
          <input
            type="text"
            name="title"
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          Content:
          <input
            type="text"
            name="content"
            onChange={(event) => setContent(event.target.value)}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </form>
      <input type="submit" value="Enviar" onClick={handleSubmit} />
      <div>
        <label>
          <Link to={`/`}>Go back</Link>
        </label>
      </div>
    </div>
  );
};

export default Create;
