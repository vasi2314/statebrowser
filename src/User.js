import Navigation from "./Navigation";
import React, { useEffect, useState, useContext } from "react";
import { Ground } from "./Context";

const Card = ({data}) => {
  return (
    <>
      <h3>{data && data.id}</h3>
      <p>{data && data.name}</p>
      <p>{data && data.email}</p>
      <p>{data && data.username}</p>
      <p>{data && data.phone}</p>
      <p>{data && data.website}</p>
      <p>{data && data.address.street}</p>
      <p>{data && data.address.city}</p>
      <p>{data && data.address.zipcode}</p>
      <p>{data && data.company.name}</p>
    </>
  );
};
const User = () => {
  const useGroundcontext = useContext(Ground);
  let userData = useGroundcontext.user

  const [filter, setFilter] = useState([]);
 
  const [user, setUser] = useState(null);
  useEffect(() => {
    useGroundcontext.fetchCall("users");

  }, []);
  console.log( useGroundcontext.calculate)

  const handlevaule = (e) => {
    let valuestore = e.target.value;
    let ascii = valuestore.charCodeAt(0);
    let digit = parseInt(valuestore);
    if (
      digit >= 0 &&
      digit <= 1000 &&
      !(ascii >= 65 && ascii <= 90) &&
      !(ascii >= 97 && ascii <= 122)
    ) {
      setFilter(userData.slice(0, digit));

      // setUser(temp.slice(0,digit))
    } else {
      setFilter(userData);

      alert("invalid input");
    }
  };
  function handleClick(id) {
    if (user && user.id == id) {
      setUser(null);
    } else {
      setUser(filter.filter((val) => val.id === id)[0]);
    }
  }

  return (
    <>
      <Navigation />
      <h1 className="center">users</h1>
      <input type="text" className="click" onChange={handlevaule}></input>
      {user === null ? (
        <div className="main">
          {filter.map((data) => (
            <div className="sub" onClick={() => handleClick(data.id)}>
              <Card data={data} />
            </div>
          ))}
        </div>
      ) : (
        <div className="sub" onClick={() => handleClick(user.id)}>
          <Card data={user} />
        </div>
      )}
    </>
  );
};
export default User;
