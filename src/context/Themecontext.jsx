import React, { createContext } from "react";

export const themedatacontext = createContext();

const Themecontext = (props) => {
  return (
    <div>
      <themedatacontext.Provider value="ayush">
        {props.children}
      </themedatacontext.Provider>
    </div>
  );
};

export default Themecontext;
