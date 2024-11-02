import React, { useState } from "react";

const Four = () => {
  const [showItem, setShowItem] = useState(false);
  const items = ["item1", "item2", "item3", "item4", "item5"];

  const show = () => {
    setShowItem(true);
  };

  return (
    <div>
      <button onClick={show}>Show Items</button>

      {showItem && (
        <ul>
          {items.map((items, index) => {
            return <li key={index}>{items}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default Four;
