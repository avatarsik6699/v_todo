import React from "react";

const Search = ({ value, onChange, placeholder = "default", children = "default" }) => {
  return (
    <label>
      {children}
      <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
    </label>
  );
};

export default Search;
