import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";
import Time from "./Time";

// Tweet Object - act as Fake Tweet Data
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
		message: "Something about cats.",
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
		message: "Something about cats.",
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
		message: "Something about cats.",
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
		message: "Something about cats.",
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

// TWEETS CONTAINER COMPONENT
function Tweets({ tweets }) {
	return (
		<div className="tweet-bar">
			{tweets.map((tweet) => (
				<TweetBar tweet={tweet} key={tweet.id} />
			))}
		</div>
	);
}
// TWEETS CONTAINER PROP TYPES
Tweets.propTypes = {
	tweets: PropTypes.array.isRequired,
};

// Tweet Bar Component
const TweetBar = ({ tweet }) => (
	<div className="tweetBar-row center">
		<Avatar hash={tweet.gravatar} />
		<div className="tweet-info">
			<div className="tweet-info-row_1">
				<Author author={tweet.author} />
				<Time time={tweet.timestamp} />
			</div>

			<div className="tweet-info-row_2">
				<TweetText message={tweet.message} />
			</div>

			<div className="tweet-info-row_3">
				<ReplyButton />
				<RetweetButton count={tweet.retweets} />
				<LikeButton count={tweet.likes} />
				<MoreOptionsButton />
			</div>
		</div>
	</div>
);
// Tweet Bar Prop Types
TweetBar.propTypes = {
	tweet: PropTypes.object.isRequired,
};

// Avatar Component
const Avatar = ({ hash }) => {
	const url = `https://robohash.org/${hash}?set=set4`;
	return <img src={url} alt="avatar" className="avatar" />;
};
// Avatar Prop Types
Avatar.propTypes = {
	hash: PropTypes.number.isRequired,
};

// Author Component
const Author = ({ author }) => {
	const { name, handle } = author;
	return (
		<React.Fragment>
			<span className="name">{name}</span>
			<span className="handle">@{handle}</span>
		</React.Fragment>
	);
};
// Author Prop Types
Author.propTypes = {
	author: PropTypes.shape({
		name: PropTypes.string.isRequired,
		handle: PropTypes.string.isRequired,
	}),
};

// Tweet-Text Component
const TweetText = ({ message }) => <div className="message">{message}</div>;
// Tweet-Text Prop Types
TweetText.propTypes = {
	message: PropTypes.string.isRequired,
};

// Reply Button Component
const ReplyButton = () => <i className="fa fa-reply reply-btn"></i>;
// Reply Button Prop Types
ReplyButton.propTypes = PropTypes.string.isRequired;

function getRetweetCount(count) {
	if (count > 0) {
		return <span className="count">{count}</span>;
	} else {
		return null;
	}
}

// Retweet Button Component
const RetweetButton = ({ count }) => (
	<span className="retweet-btn">
		<i className="fa fa-retweet"></i>
		{getRetweetCount(count)}
	</span>
);
// Retweet Button Prop Type
RetweetButton.propTypes = {
	count: PropTypes.number.isRequired,
};

// Like Button Component
const LikeButton = ({ count }) => (
	<span className="like-btn">
		<i className="fa fa-heart"></i>
		{getRetweetCount(count)}
	</span>
);
// Like Button Prop Type
LikeButton.propTypes = {
	count: PropTypes.number.isRequired,
};

// More Options Button Component
const MoreOptionsButton = () => <i className="fa fa-ellipsis-h"></i>;
// More Options Button Prop Types
MoreOptionsButton.propTypes = PropTypes.string.isRequired;

// Here we render to the DOM
ReactDOM.render(<Tweets tweets={testTweet} />, document.querySelector("#root"));
