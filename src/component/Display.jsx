import React, { useContext } from 'react';
import '../App.css';
import { DataContext } from "../DataContext";

function Display() {

     const [[inptxt], [fultxt]] = useContext(DataContext);

     return (
          <div className="display">
               <p>{fultxt}</p>
               <input type="text" className="textbox" value={inptxt} onChange={() => null} placeholder="0" />
          </div>
     );
}
export default Display;
