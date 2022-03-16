import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";
import "./fonts.css";

// Email Object
const emailData = {
	sender: "React Newsletter",
	subject: "React Newsletter - Issue 36",
	date: "Jul 15",
	message:
		"You are learning React and You are doing great. Keep learning, keep building, hold your head high, Never give up.",
};

function Email({ props }) {
	const { sender, subject, date, message } = props;
	return (
		<div className="col">
			<div className="col-1">
				<i className="fas fa-circle-notch"></i>
				<i className="fas fa-thumbtack"></i>
			</div>
			<div className="col-2">
				<div className="row-1">
					<h2 className="header">{sender}</h2>
					<h2 className="header">{subject}</h2>
					<h2 className="header">{date}</h2>
				</div>
				<div className="row-2">
					<p className="para">{message}</p>
				</div>
			</div>
		</div>
	);
}

// Email Prototype
Email.propTypes = {
	props: PropTypes.shape({
		sender: PropTypes.string.isRequired,
		subject: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		message: PropTypes.string.isRequired,
	}),
};

ReactDOM.render(<Email props={emailData} />, document.querySelector("#root"));
