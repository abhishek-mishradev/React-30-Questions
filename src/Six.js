import React, { useEffect, useState } from "react";

import axios from "axios";

const Six = () => {
  const [data, setData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts/1";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
       <ul>
          <li key={data.id}>{data.title}</li> 
        </ul>
    </div>
  );
};

export default Six;

// https://chatgpt.com/c/6715d4d2-c2c8-8001-8943-06d2ab47b580