import React, { useState } from "react";
import ReactDOM, { render } from "react-dom";

// ROOM COMPONENT STATE
function Room() {
	const [lightSwitch, setLightSwitch] = useState(true);

	const switchLight = () => {
		setLightSwitch(!lightSwitch);

		// Using if-else condition
		// if (lightSwitch) {
		// 	setLightSwitch(false);
		// } else {
		// 	setLightSwitch(true);
		// }
	};

	return (
		<>
			<button onClick={switchLight}>Switch Button</button>
			{lightSwitch ? <p>"The Room is Lit"</p> : <p>"The Room is Dark"</p>}
		</>
	);
}

ReactDOM.render(<Room />, document.querySelector("#root"));
