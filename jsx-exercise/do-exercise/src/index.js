import React from "react";
import ReactDOM from "react-dom";

function MyName() {
	return <div>My name is Tomide Anjorin</div>;
}

// Exercise - Using React.createElement
function BookStatsCreate() {
	return React.createElement(
		"div",
		{ className: "book" },
		React.createElement("div", { className: "title" }, "The Title"),
		React.createElement("div", { className: "author" }, "The Author"),
		React.createElement(
			"ul",
			{ className: "stats" },
			React.createElement("li", { className: "rating" }, "5 stars"),
			React.createElement("li", { className: "isbn" }, "12-345678-910")
		)
	);
}

// Exercise Component
function BookStats() {
	return (
		<React.Fragment>
			<div className="book">
				<div className="title">The Title</div>
				<div className="author">The Author</div>
				<ul className="stats">
					<li className="rating">5 stars</li>
					<li className="isbn">12-345678-910</li>
				</ul>
				{/*Test for Single Line Rendering*/}
				<div>NewLine Test</div>

				{/*Test for Empty NewLines Rendering*/}
				<div>Empty NewLines Here</div>

				{/*Test for "Spaces with newlines" Rendering*/}
				<div>&nbsp;Non-breaking &nbsp;Spaces&nbsp;</div>

				{/*Test for "Inserting spaces when content spans multiple lines" Rendering*/}
				<div>
					Line1
					{"  "}
					Line 2
				</div>
			</div>
		</React.Fragment>
	);
}

function Greeting() {
	let username = "ROOT";

	return (
		<div>
			{username === undefined || username === null ? "Not logged in" : `Hello, ${username}`}
		</div>
	);
}

ReactDOM.render(
	<React.Fragment>
		<MyName />
		<BookStats />
		<BookStatsCreate />
		<Greeting />
	</React.Fragment>,
	document.querySelector("#root")
);
