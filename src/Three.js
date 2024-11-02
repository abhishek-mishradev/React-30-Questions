import React, { useState } from "react";

const Three = () => {
  const [input, setInput] = useState("abhi");

  const handleChange = (e) => {
    const Value = e.target.value;
    setInput(Value);
    console.log(Value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />

      <p>Your entered text: {input}</p>
    </div>
  );
};

export default Three;
