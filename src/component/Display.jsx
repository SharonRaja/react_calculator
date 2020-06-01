import React, { useContext } from 'react';
import '../App.css';
import { DataContext } from "../DataContext";

function Display() {

     const [[inptxt, setinptxt], [fultxt], [inpclass,]] = useContext(DataContext);

     // function to get input from the keyboard
     const keyin = (event) => {
          setinptxt(event.target.value);
     }
     return (
          <div className="display">
               <p>{fultxt}</p>
               <input type="text" className={inpclass} value={inptxt} onChange={keyin} placeholder="0" />
          </div>
     );
}
export default Display;
