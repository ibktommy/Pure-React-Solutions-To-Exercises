import React, { useRef } from "react";
import ReactDOM from "react-dom";

// Function Name
const NameRef = () => {
	const firstNameRef = useRef();
	const lastNameRef = useRef();

	const displayNames = () => {
		alert(`Hello ${firstNameRef.current.value} ${lastNameRef.current.value}`);
	};

	return (
		<React.Fragment>
			<div className="input-box">
				<label htmlFor="firstname">FirstName: </label>
				<input type="text" id="firstname" ref={firstNameRef} />
			</div>
			<div className="input-box">
				<label htmlFor="lastname">LastName: </label>
				<input type="text" id="lastname" ref={lastNameRef} />
			</div>

			<button onClick={displayNames}>Click to Display Names</button>
		</React.Fragment>
	);
};

ReactDOM.render(<NameRef />, document.querySelector("#root"));
