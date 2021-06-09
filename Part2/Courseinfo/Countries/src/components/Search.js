import React from "react";

const Search = ({ onTextChange, searchText }) => {
  return (
    <form>
      <label htmlFor="">Find Countries</label>
      <input type="text" onChange={onTextChange} value={searchText} />
    </form>
  );
};

export default Search;
