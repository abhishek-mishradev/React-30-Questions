import React from "react";

const Eleven = () => {
  let quotes = [
    " Avoid daydreaming about the years to come.",
    "You are the most important person in your whole life.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Only demonstrate your strength when it’s really required.",
    "Subscribe to Drop X Out",
  ];

  const randomIndex= Math.floor(Math.random()*quotes.length);
  const randomQuote=quotes[randomIndex];


  return <div>
    <h1>{randomQuote}</h1>

    
  </div>;
};

export default Eleven;