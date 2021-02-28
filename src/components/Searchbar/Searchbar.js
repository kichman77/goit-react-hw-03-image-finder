import React from "react";
import PropTypes from "prop-types";

const Searchbar = ({ getQueryValue }) => {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={getQueryValue}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default Searchbar;

Searchbar.propTypes = {
  getQueryValue: PropTypes.func.isRequired,
};
