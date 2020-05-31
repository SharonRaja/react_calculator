import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const Dataprovider = (props) => {
     const [inptxt, setinptxt] = useState("hi");
     const [fultxt, setfultxt] = useState("history");


     return (

          <DataContext.Provider value={[[inptxt, setinptxt], [fultxt, setfultxt]]}>
               {props.children}
          </DataContext.Provider>
     );

}
