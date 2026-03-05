import React, { useEffect, useRef, useState } from "react";

const HooksUsed = () => {
  const [y, setY] = useState(0);
  const z = useRef(0);
  console.log(z);
  let x = 0;
  console.log("rendering");
  const z1 = useRef(null)
//   const z1 = {
//     current : null
//   }
  useEffect(()=>{
    // prevent multiple intervals in strict mode
    z1.current = setInterval(()=>{
        console.log("Namaste React", Math.random())
    },1000)
    return () => clearInterval(z1.current)
  },[])
  return (
    <div className="p-4 m-4 w-96 h-96 border-black ">
      <button
        className="border-black m-2 p-4 bg-orange-400 pr-6 mr-12 text-white"
        onClick={() => {
          x = x + 1;
          console.log({ x });
        }}
      >
        Increase X
      </button>
      <span>let x = {x}</span>
      <button
        className="border-black m-2 p-4  bg-orange-400  pr-6 mr-12 text-white"
        onClick={() => {
          setY((t) => t + 1);
          console.log({ y });
        }}
      >
        Increase Y
      </button>
      <span>State y = {y}</span>
      <button
        className="border-black m-2 p-4  bg-orange-400  pr-6 mr-12 text-white"
        onClick={() => {
          z.current = z.current + 1;
          console.log( z );
        }}
      >
        Increase z
      </button>
      <span>Ref z = {z.current}</span>
      <button
        className="border-black m-2 p-4 bg-red-700 pr-6 mr-12 text-white rounded-md"
        onClick={() => {
          console.log('Stop printing',z1.current)
          clearInterval(z1.current)
        }}
      >
        Stop Printing
      </button>
    </div>
  );
};

export default HooksUsed;
