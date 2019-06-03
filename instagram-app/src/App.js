import React from "react";
import PropTypes from "prop-types";

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
          <SearchBarContainer />
        </header>
        <main>
          <PostsContainer posts={this.state.dummyData} />
        </main>
      </div>
    );
  }
}

PostsContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
};

export default App;
