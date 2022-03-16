import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PropTypes from "prop-types";

// Person Object
const person = {
	fullName: "Mr Reese",
	address: 123,
	location: "Zion, CA, USA",
};

function AddressLabel({ personData }) {
	const { fullName, address, location } = personData;
	return (
		<div className="container">
			<h2 className="header-text">{fullName}</h2>
			<p className="header-para">{address}</p>
			<p className="header-para">{location}</p>
		</div>
	);
}

AddressLabel.propTypes = {
	personData: PropTypes.shape({
		fullName: PropTypes.string.isRequired,
		address: PropTypes.number.isRequired,
		location: PropTypes.string.isRequired,
	}),
};

ReactDOM.render(<AddressLabel personData={person} />, document.getElementById("root"));
