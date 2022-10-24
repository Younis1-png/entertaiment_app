import React from "react";
import searchIcone from "../assets/icon-search.svg";

const Search = () => {
  return (
    <div className="search">
      <img src={searchIcone} alt="" />
      <input type="text" placeholder="Search for movies or Tv series" />
    </div>
  );
};

export default Search;
