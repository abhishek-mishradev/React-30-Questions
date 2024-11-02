import React, { useEffect, useState } from "react";

const Seven = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    const timer = setTimeout(() => setTime(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <h2>Time remaining: {time} seconds</h2>
    </div>
  );
};

export default Seven;
