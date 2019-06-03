import React from "react";

import "./SearchBar.css";

class SearchBarContainer extends React.Component {
  render() {
    return (
      <div className="search-container">
        <p>logo | Instagram</p>
        <form>
          <input type="text" />
        </form>
        <p>Icons</p>
      </div>
    );
  }
}

export default SearchBarContainer;
