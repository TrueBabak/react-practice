import React, { useContext } from "react";
import { Context } from "../Context";

const ContextPrac = () => {
  const { Count, setCount } = useContext(Context);
  const incrementHandler = () => {
    setCount(Count + 1);
  };
  return (
    <div className="w-full bg-green-600 h-screen flex justify-center items-center">
      <h1 className="text-3xl text-green-50">{Count}</h1>
      <button
        onClick={incrementHandler}
        className="border border-green-300 px-4 py-2 rounded-xl text-green-100 font-mono mx-4 hover:bg-green-300 transition-all duration-300"
      >
        Click
      </button>
    </div>
  );
};

export default ContextPrac;
