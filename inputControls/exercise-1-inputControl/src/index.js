import React, { useState } from "react";
import ReactDOM from "react-dom";

// Function Name
const Name = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	function firstNameChange(event) {
		setFirstName(event.target.value);
	}
	function lastNameChange(event) {
		setLastName(event.target.value);
	}

	return (
		<React.Fragment>
			<div className="input-box">
				<label for="firstname">FirstName: </label>
				<input type="text" id="firstname" value={firstName} onChange={firstNameChange} />
			</div>
			<div className="input-box">
				<label for="lastname">LastName: </label>
				<input type="text" id="lastname" value={lastName} onChange={lastNameChange} />
			</div>
			<p>
				"Hello {firstName} {lastName}!"
			</p>
		</React.Fragment>
	);
};

ReactDOM.render(<Name />, document.querySelector("#root"));
