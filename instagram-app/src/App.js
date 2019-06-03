import React from "react";

import SearchBarContainer from "./components/SearchBar/SearchBarContainer";
import PostsContainer from "./components/PostContainer/PostsContainer";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <p>App.js</p>
          <SearchBarContainer />
        </header>
        <main>
          <PostsContainer />
          <PostsContainer />
          <PostsContainer />
          <PostsContainer />
        </main>
      </div>
    );
  }
}

export default App;
