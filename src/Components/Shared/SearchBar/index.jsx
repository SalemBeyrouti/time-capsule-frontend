// SearchBar.jsx
import React from "react";
import TextInput from "../TextInput/TextInput";
import { FaSearch } from "react-icons/fa";
import "./styles.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-wrapper">
      <FaSearch className="search-icon" />
      <TextInput
        placeholder="Search time capsules, creators, or tags..."
        value={value}
        onChange={onChange}
        name="search"
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
