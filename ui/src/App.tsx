import React from "react";
import Icon from "@shared/components/Icon/Icon";

export const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="app">
      AppHot123123
      <Icon name="arrow-link" height={20} width={20} color="black" />
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}>
        {count}
      </button>
    </div>
  );
};
