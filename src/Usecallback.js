// import React, { useState, useCallback } from "react";
// import Navigation from "./Navigation";

// const UseCallback=()=> {
//   const [count, setCount] = useState(0);

//   const increment = useCallback(() => {
//     setCount((count) => count + 1);
//   }, []);

//   return (
//     <div>
//         {/* <Navigation/> */}
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default UseCallback;
import React, { useState, useCallback } from 'react';

const UseCallback = () => {
  const [count, setCount] = useState(1);
  const [multiplier, setMultiplier] = useState(2);

  const calculate = useCallback(() => {
    return count * multiplier;
  }, [count, multiplier]);

 
  return (
    <div>
      <p>Result: {calculate()}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase Count</button>
      <h1>Count: {count}</h1>
      <button onClick={() => setMultiplier((prev) => prev + 1)}>Increase Multiplier</button>
      <h1>Multiplier: {multiplier}</h1>
    </div>
  );
};

export default UseCallback;
