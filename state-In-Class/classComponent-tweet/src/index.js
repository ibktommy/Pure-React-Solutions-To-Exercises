import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const testTweet = [
	{
		id: 1,
		message: "Something about cats.",
		gravatar: 1,
		author: {
			handle: "catperson - ",
			name: "IAMA Cat Person",
		},
		likes: 22,
		retweets: 10,
		timestamp: "2022-03-19 17:24",
	},
	{
		id: 2,
		message: "Something about dog.",
		gravatar: 2,
		author: {
			handle: "catperson - ",
			name: "IAMA Cat Person",
		},
		likes: 22,
		retweets: 10,
		timestamp: "2022-03-19 17:24",
	},
	{
		id: 3,
		message: "Something about goat.",
		gravatar: 3,
		author: {
			handle: "catperson - ",
			name: "IAMA Cat Person",
		},
		likes: 22,
		retweets: 10,
		timestamp: "2022-03-19 17:24",
	},
	{
		id: 4,
		message: "Something about fish.",
		gravatar: 4,
		author: {
			handle: "catperson - ",
			name: "IAMA Cat Person",
		},
		likes: 22,
		retweets: 10,
		timestamp: "2022-03-19 17:24",
	},
	{
		id: 5,
		message: "Something about grasshoper.",
		gravatar: 5,
		author: {
			handle: "catperson - ",
			name: "IAMA Cat Person",
		},
		likes: 22,
		retweets: 10,
		timestamp: "2022-03-19 17:24",
	},
];

class TweetBox extends Component {
	render() {
		const data = testTweet;
		return (
			<div className="card">
				{data.map((eachData) => (
					<Tweet
						// eachData={data}
						key={eachData.id}
						message={eachData.message}
						name={eachData.author.name}
						handle={eachData.author.handle}
					/>
				))}
			</div>
		);
	}
}

class Tweet extends Component {
	render() {
		return (
			<div className="row">
				<span className="name">{this.props.name}</span>
				<span className="handle">{this.props.handle}</span>
				<p className="message">{this.props.message}</p>
			</div>
		);
	}
}

ReactDOM.render(<TweetBox />, document.querySelector("#root"));
