import React, { useContext } from 'react';
import '../App.css';
import { DataContext } from "../DataContext";

function Display() {

     const [[inptxt, setinptxt], [fultxt, setfultxt]] = useContext(DataContext);

     return (
          <div className="display">
               <p>{fultxt}</p>
               <input type="text" className="textbox" name="inpbox" value={inptxt} placeholder="0" />
          </div>
     );
}
export default Display;
