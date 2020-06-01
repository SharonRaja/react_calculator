import React, { useContext } from "react";
import "../App.css";
import { DataContext } from "../DataContext";

function Button({ prop }) {

	const [[inptxt, setinptxt], [setfultxt]] = useContext(DataContext);


	const clicked = ({ id }) => {
		// console.log(id, fultxt);

		// setfultxt(fultxt + value);
		// setinptxt(id)
		switch (id) {
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
			case "0":
			case ".":
			case "(":
			case ")":
			case "+":
			case "-":
			case "*":
			case "/":
				console.log(id);
				setinptxt(inptxt + id);
				break;
			case "AC":
				console.log("All clear");
				setinptxt("");
				setfultxt("");
				break;
			case "C":
				console.log("clear");
				setinptxt(inptxt.substring(0, inptxt.length - 1));
				break;
			case "=":
				let cal = 0;
				try {
					// eslint-disable-next-line no-eval
					cal = eval(inptxt);
					setinptxt(cal);
					setfultxt(`Ans = ${cal}`);
				} catch (e) {
					setinptxt("Math error");
				}

				break;
			default:
				setinptxt("Unkown error!");
				break;
		}


	}

	return (<button className={prop.class} onClick={() => clicked(prop)}>{prop.value}</button>);
}
export default Button;
