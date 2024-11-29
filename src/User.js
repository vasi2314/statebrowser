import Navigation from "./Navigation";
import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState([]);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((a) => a.json())
      .then((b) => {
        setUser(b);
        setFilter(b)
      });
  }, []);

  const handlevaule = (e) => {
    let digit = parseInt(e.target.value);
    console.log("@tm user", user);
    if (digit >= 0 && digit <= 1000) {
      setFilter(user.slice(0, digit));

      // setUser(temp.slice(0,digit))
    } else {
      setFilter(user);

      alert("invalid input");
    }
  };
  console.log("@ft filter", filter);

  return (
    <>
      <Navigation />
      <h1 className="center">users</h1>
      <input type="number" className="click" onChange={handlevaule}></input>
      <div className="main">
        {filter.map((data) => (
          <div className="sub">
            <h3>{data.id}</h3>
            <p>{data.name}</p>
            <p>{data.email}</p>
            <p>{data.username}</p>
            <p>{data.phone}</p>
            <p>{data.website}</p>
            <p>{data.address.street}</p>
            <p>{data.address.city}</p>
            <p>{data.address.zipcode}</p>
            <p>{data.company.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default User;
