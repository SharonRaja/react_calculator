import React from "react";
import "../App.css";

function Button({ prop }) {
	const clicked = (id) => {
		console.log(id);
	}

	return (<button className={prop.class} onClick={() => clicked(prop.id)}>{prop.value}</button>);
}
export default Button;
