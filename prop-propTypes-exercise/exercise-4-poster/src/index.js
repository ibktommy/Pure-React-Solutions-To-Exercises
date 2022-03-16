import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./img.jpeg";

// POSTER OBJECT
const posterObj = {
	image: logo,
	title: "Procastination",
	text: "Do what you will do now, no one promised the next second.",
};

// POSTER COMPONENT
function Poster({ props }) {
	const { image, title, text } = props;
	return (
		<div className="container">
			<img src={image} alt="poster" className="poster" />
			<h2 className="title">{title}</h2>
			<p className="text">{text}</p>
		</div>
	);
}

ReactDOM.render(<Poster props={posterObj} />, document.querySelector("#root"));
