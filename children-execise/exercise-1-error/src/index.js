import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//EXERCISE ONE
// // ERROR COMPONENT
// function Error({ children }) {
// 	return (
// 		<div className="container">
// 			<i className="fas fa-exclamation-triangle"></i>
// 			{children}
// 		</div>
// 	);
// }

// ReactDOM.render(<Error>This is a Warning</Error>, document.querySelector("#root"));


//EXERCISE TWO
function FirstChildOnly({ children }) {
	let items = React.Children.toArray(children);
	return <div className="container-child">{items[0]}</div>;
}

function LastChildOnly({ children }) {
	let items = React.Children.toArray(children);
	return <div className="container-child">{items.pop()}</div>;
}

function Head({ number, children }) {
	let items = React.Children.toArray(children);
	return <div className="container-child">{items.slice(0, number)}</div>;
}

function Tail({ number, children }) {
	let items = React.Children.toArray(children);
	return <div className="container-child">{items.reverse().slice(0, number)}</div>;
}

function Children({ children }) {
	return (
		<div className="container">
			<h2>First Child: </h2>
			<FirstChildOnly>{children}</FirstChildOnly>
			<h2>Last Child: </h2>
			<LastChildOnly>{children}</LastChildOnly>
			<h2>Head Children: </h2>
			<Head number={3}>{children}</Head>
			<h2>Tail Children: </h2>
			<Tail number={3}>{children}</Tail>
		</div>
	);
}

ReactDOM.render(
	<Children>
		{2}
		{3}
		{4}
		{5}
		{6}
		{7}
		{8}
		{9}
	</Children>,
	document.querySelector("#root")
);

// ANOTHER METHOD AS SOLUTION

// // FIRSTCHILDONLY COMPONENT
// function FirstChildOnly({ children }) {
// 	let items = React.Children.toArray(children);
// 	return <div className="container">{items[0]}</div>;
// }

// ReactDOM.render(
// 	<FirstChildOnly>
// 		{"map"} {2} {true}
// 	</FirstChildOnly>,
// 	document.querySelector("#root")
// );

// LASTCHILDONLY COMPONENT
// function LastChildOnly({ children }) {
// 	let items = React.Children.toArray(children);
// 	return <div className="container">{items.pop()}</div>;
// }

// ReactDOM.render(
// 	<LastChildOnly>
// 		{"map"}
// 		{2}
// 		{"new"}
// 		{5}
// 		{"hi"}
// 	</LastChildOnly>,
// 	document.querySelector("#root")
// );

// HEAD COMPONENT
// function Head({ number, children }) {
// 	let items = React.Children.toArray(children);
// 	return <div className="container">{items.slice(0, number)}</div>;
// }
// ReactDOM.render(
// 	<Head number={3}>
// 		{2}
// 		{3}
// 		{4}
// 		{5}
// 		{6}
// 		{7}
// 		{8}
// 		{9}
// 	</Head>,
// 	document.querySelector("#root")
// );

// TAIL COMPONENT
// function Tail({ number, children }) {
// 	let items = React.Children.toArray(children);
// 	return <div className="container">{items.reverse().slice(0, number)}</div>;
// }

// ReactDOM.render(
// 	<Tail number={5}>
// 		{2}
// 		{3}
// 		{4}
// 		{5}
// 		{6}
// 		{7}
// 		{8}
// 		{9}
// 	</Tail>,
// 	document.querySelector("#root")
// );
