import React, { useState } from "react";

const Five = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleToggle} />
      </label>
      <p> {isToggle ? "On" : "Off"}</p>
    </div>
  );
};

export default Five;
