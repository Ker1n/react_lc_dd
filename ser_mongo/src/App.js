import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Docs } from "./admin/documentation/Docs";
import NewPost from "./admin/NewPost/NewPost";
import Posts from "./admin/Posts/Posts";
import { HomePage } from "./view/HomePage";

function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} exact />
      <Route path="/docs" component={Docs} exact />
      <Route path="/new-post" component={NewPost} exact />
      <Route path="/posts" component={Posts} exact />
    </Router>
  );
}

export default App;
