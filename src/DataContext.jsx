import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const Dataprovider = (props) => {


     const [inptxt, setinptxt] = useState(" "); // Text box input value
     const [fultxt, setfultxt] = useState(""); // p tag value
     const [inpclass, setinpclass] = useState("textbox") // class for text box for style


     return (
          <DataContext.Provider value={[[inptxt, setinptxt], [fultxt, setfultxt], [inpclass, setinpclass]]}>
               {props.children}
          </DataContext.Provider>
     );

}
