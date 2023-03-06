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
      break;
  }
};
const ReducerFunc = () => {
  let initialState = 0;
  const [Count, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="w-full h-screen bg-[#0E8388] flex justify-center items-center">
      <div className="bg-[#2E4F4F] w-1/6 text-[#CBE4DE] m-auto py-4 rounded-xl px-4">
        reducer
      </div>
    </div>
  );
};

export default ReducerFunc;
