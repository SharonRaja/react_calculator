import React, { useState, useContext } from "react";
import "../App.css";
import { DataContext } from "../DataContext";

function Button({ prop }) {

	const [[inptxt, setinptxt], [fultxt, setfultxt]] = useContext(DataContext);


	const clicked = ({ id, value }) => {
		console.log(id);
		setfultxt("history" + value);
		setinptxt(id)
	}

	return (<button className={prop.class} onClick={() => clicked(prop)}>{prop.value}</button>);
}
export default Button;
