import React from "react";

import "./SearchBar.css";

const SearchBarContainer = props => {
  return (
    <div className="search-container">
      <p>logo | Instagram</p>
      <form>
        <input type="text" />
      </form>
      <p>Icons</p>
    </div>
  );
};

export default SearchBarContainer;
