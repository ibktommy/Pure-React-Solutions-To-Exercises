import React, { useState } from "react";
import ReactDOM from "react-dom";

// RandomList COMPONENT - STATE
function RandomList() {
	// Set Initial State to An Array
	const [list, setList] = useState([]);

	// Function To Add Random Number To List
	const addToList = () =>
		setList([
			...list,
			{
				id: list.length,
				value: (Math.random() * 50).toFixed(2),
			},
		]);

	return (
		<>
			<button onClick={addToList}>Get Random Number List</button>
			<div>
				{list.map((listItem) => (
					<div key={listItem.id}>{listItem.value}</div>
				))}
			</div>
		</>
	);
}

ReactDOM.render(<RandomList />, document.querySelector("#root"));
