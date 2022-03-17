import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PropTypes from "prop-types";

function Title() {
	return <h2 className="title">This is Important</h2>;
}
function Body() {
	return <p className="body">here is some important text or error or something</p>;
}
function Footer() {
	return <button className="footer">Close</button>;
}

function Dialog({ children }) {
	return <div className="container center">{children}</div>;
}

Dialog.propTypes = {
	children: PropTypes.array.isRequired,
};

ReactDOM.render(
	<Dialog>
		{<Title />}
		{<Body />}
		{<Footer />}
	</Dialog>,
	document.querySelector("#root")
);
