import React, { useEffect, useRef, useState } from "react";

const FunctionRef = () => {
  // Useref hooks
  // 1. useref() => DOM access
  //   2. to store the value of previous state !!!
  const [Text, setText] = useState("");
  const inputRef = useRef();
  const textChange = (e) => {
    setText(e.target.value);
  };
  const resetText = () => {
    console.log(inputRef.current.value);
    setText("");
  };
  useEffect(() => {
    console.log("effect");
    inputRef.current = Text;
  }, [Text]);
  return (
    <div className="w-full mt-5 overflow-hidden">
      <div className="m-auto flex justify-center">
        <input
          type="text"
          ref={inputRef}
          onChange={textChange}
          value={Text}
          className="border border-gray-600 rounded-xl px-2 py-1 font-mono"
        />
        <button
          className="bg-gray-800 px-4 py-2 mx-2 rounded-xl text-white"
          onClick={(e) => {
            resetText(e);
          }}
        >
          Reset
        </button>
      </div>
      <div className="text-center">
        {Text} & {inputRef.current}
      </div>
    </div>
  );
};

export default FunctionRef;
