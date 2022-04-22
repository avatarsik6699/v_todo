import React from "react";

const List = (props) => {
  if (!props.items?.length) return null;

  return (
    <ul className="list">
      {props.items.map((item, index) => (
        <li key={item + index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;
