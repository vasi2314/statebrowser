import Navigation from "./Navigation";
import React, { useEffect, useState } from "react";

const Commends = () => {
  const [center, setCenter] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((a) => a.json())
      .then((arr) => {
        setCenter(arr);
      });
  }, []);

  return (
    <>
      <Navigation />
      <h1 className="center">commends</h1>

      <div className="main">
        {center.map((item) => (
          <div className="sub">
            <h3>{item.id}</h3>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default Commends;
