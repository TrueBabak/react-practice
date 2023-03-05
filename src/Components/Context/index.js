import { createContext, useState } from "react";

// Contexts
const ContextApi = {
  Count: 0,
  setCount: () => {},
  Text: "",
  setText: () => {},
};
// Store
export const Context = createContext(ContextApi);

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
