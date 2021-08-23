import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit(searchTerm);
    setSearchTerm("");
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            placeholder="search for any video"
            onChange={onInputChange}
            type="text"
            value={searchTerm}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
