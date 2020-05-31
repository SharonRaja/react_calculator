import React from "react";
import "./App.css";
import Button from "./component/Button";
import Display from "./component/Display"
function App() {

	const data = [{
		id: "(",
		value: "(",
		class: "specific"
	}, {
		id: ")",
		value: ")",
		class: "specific"
	}, {
		id: "C",
		value: "\u232b",
		class: "specific"
	}, {
		id: "AC",
		value: "AC",
		class: "allclear"
	}, {
		value: "br",
		id: "br1"
	}, {
		id: "7",
		value: "7",
		class: "number"
	}, {
		id: "8",
		value: "8",
		class: "number"
	}, {
		id: "9",
		value: "9",
		class: "number"
	}, {
		id: "/",
		value: "/",
		class: "specific"
	}, {
		value: "br",
		id: "br2"
	}, {
		id: "4",
		value: 4,
		class: "number"
	}, {
		id: "5",
		value: 5,
		class: "number"
	}, {
		id: "6",
		value: 6,
		class: "number"
	}, {
		id: "*",
		value: "X",
		class: "specific"
	}, {
		value: "br",
		id: "br3"
	}, {
		id: "1",
		value: "1",
		class: "number"
	}, {
		id: "2",
		value: "2",
		class: "number"
	}, {
		id: "3",
		value: "3",
		class: "number"
	}, {
		id: "-",
		value: "-",
		class: "specific"
	}, {
		value: "br",
		id: "br4"
	}, {
		id: ".",
		value: ".",
		class: "number"
	}, {
		id: "0",
		value: "0",
		class: "number"
	}, {
		id: "=",
		value: "=",
		class: "equal"
	}, {
		id: "+",
		value: "+",
		class: "specific"
	}

	];


	return (
		<div className="main">

			<Display></Display>
			<div className="buttonhoder">{data.map((props) => {
				if (props.value === "br") {
					return (<br key={props.id} />);
				}
				else {
					return (<Button key={props.id} prop={props}></Button>);
				}
			}
			)}
			</div>
		</div>
	);
}

export default App;
