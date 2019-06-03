import React from "react";

import SearchBarContainer from "./components/SearchBar/SearchBarContainer";
import PostsContainer from "./components/PostContainer/PostsContainer";

import dummyData from "./dummy-data";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData
    };
  }

  render() {
    return (
      <div>
        <header>
          <p>App.js</p>
          <SearchBarContainer />
        </header>
        <main>
          <PostsContainer posts={this.state.dummyData} />
        </main>
      </div>
    );
  }
}

export default App;
