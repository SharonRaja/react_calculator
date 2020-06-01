import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const Dataprovider = (props) => {
     const [inptxt, setinptxt] = useState(" ");
     const [fultxt, setfultxt] = useState("");
     const [inpclass, setinpclass] = useState("textbox")


     return (

          <DataContext.Provider value={[[inptxt, setinptxt], [fultxt, setfultxt], [inpclass, setinpclass]]}>
               {props.children}
          </DataContext.Provider>
     );

}
