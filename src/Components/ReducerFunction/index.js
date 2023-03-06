import React, { useReducer } from "react";
const reducer = (state, action) => {
  switch (action) {
    case "addOne":
      return state + 1;
    case "addFive":
      return state + 5;
    case "decrement":
      return state - 1;

    default:
      return state;
  }
};
const ReducerFunc = () => {
  const [Count, dispatch] = useReducer(reducer, 0);
  return (
    <div className="w-full h-screen bg-[#0E8388] flex justify-center items-center">
      <div className="bg-[#2E4F4F] w-1/6 text-[#CBE4DE] m-auto py-4 rounded-xl px-4">
        <h1 className="text-center text-3xl mb-4 font-mono">{Count}</h1>
        <div className="flex justify-between">
          <button
            className="border border-[#CBE4DE] px-2 py-1 rounded-xl hover:bg-[#2C3333] hover:text-white transition-all duration-300 hover:border-transparent select-none cursor-pointer"
            onClick={() => dispatch("addOne")}
          >
            Add one
          </button>
          <button
            className="border border-[#CBE4DE] px-2 py-1 rounded-xl hover:bg-[#2C3333] hover:text-white transition-all duration-300 hover:border-transparent select-none cursor-pointer"
            onClick={() => dispatch("addFive")}
          >
            Add five
          </button>
          <button
            className="border border-[#CBE4DE] px-2 py-1 rounded-xl hover:bg-[#2C3333] hover:text-white transition-all duration-300 hover:border-transparent select-none cursor-pointer"
            onClick={() => dispatch("decrement")}
          >
            Min 1
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReducerFunc;
