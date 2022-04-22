import React from "react";
import Icon from "@shared/components/Icon/Icon";

export const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="app">
      AppHot123123
      <Icon name="arrow-down" height={10} width={10} color="red" />
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}>
        {count}
      </button>
    </div>
  );
};
