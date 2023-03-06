import React, { useReducer } from "react";
const resetState = 0;
const initialState = {
  Counter1: 0,
  Counter2: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "addOne":
      return { Counter1: state.Counter1 + action.value };
    case "Reset":
      return { Counter1: resetState };
    case "decrement":
      return { Counter1: state.Counter1 - action.value };

    default:
      return { Counter1: initialState };
  }
};
const ReducerFunc = () => {
  const [Count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="w-full h-screen bg-[#0E8388] flex justify-center items-center">
      <div className="bg-[#2E4F4F] w-1/6 text-[#CBE4DE] m-auto py-4 rounded-xl px-4">
        <h1 className="text-center text-3xl mb-4 font-mono">
          {Count.Counter1}
        </h1>
        <div className="flex justify-between">
          <button
            className="border border-[#CBE4DE] px-2 py-1 rounded-xl hover:bg-[#2C3333] hover:text-white transition-all duration-300 hover:border-transparent select-none cursor-pointer"
            onClick={() => dispatch({ type: "addOne", value: 1 })}
          >
            Add one
          </button>
          <button
            className="border border-[#CBE4DE] px-2 py-1 rounded-xl hover:bg-[#2C3333] hover:text-white transition-all duration-300 hover:border-transparent select-none cursor-pointer"
            onClick={() => dispatch({ type: "Reset", value: resetState })}
          >
            Reset
          </button>
          <button
            className="border border-[#CBE4DE] px-2 py-1 rounded-xl hover:bg-[#2C3333] hover:text-white transition-all duration-300 hover:border-transparent select-none cursor-pointer"
            onClick={() => dispatch({ type: "decrement", value: -1 })}
          >
            Min 1
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReducerFunc;
