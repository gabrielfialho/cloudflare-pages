import { Router } from "@reach/router";

import Posts from "./components/posts";
import Post from "./components/post";
import Create from "./components/create";

function App() {
  return (
    <Router>
      <Posts path="/" />
      <Post path="/posts/:id" />
      <Create path="/posts/create" />
    </Router>
  );
}
export default App;
