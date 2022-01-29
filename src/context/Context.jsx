import { createContext, useState } from "react";

export const context = createContext(null);

function ContextProvider({ children }) {
  const [username, setUsername] = useState("");

  return (
    <context.Provider value={{ username, setUsername }}>
      {children}
    </context.Provider>
  );
}

export default ContextProvider;
