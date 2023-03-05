import { createContext, useState } from "react";
// Store
export const Context = createContext({
  Count: 0,
  setCount: () => {},
  Text: "",
  setText: () => {},
});

// Provider
const ContextsProvider = ({ children }) => {
  const [Count, setCount] = useState(0);
  const [Text, setText] = useState("");
  return (
    <Context.Provider value={{ Count, setCount, Text, setText }}>
      {children}
    </Context.Provider>
  );
};
export default ContextsProvider;
