import React, { useState } from "react";

const Nine = () => {
  const [color, setColor] = useState("black");

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        backgroundColor: color,
        cursor: "pointer",
      }}
      onClick={() => setColor(color === "black" ? "red" : "black")}
    ></div>
  );
};

export default Nine;
