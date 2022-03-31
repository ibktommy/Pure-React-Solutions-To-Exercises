import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Reddit extends Component {
	state = {
		posts: [],
		error: "",
	};

	componentDidMount() {
		axios({
			url: `https://www.reddit.com/r/${this.props.subreddit}.json`,
			method: "get",
			headers: {
				Accept: "application/json",
			},
		})
			.then((response) => {
				const posts = response.data.data.children.map((active) => active.data);
				this.setState({ posts });
			})
			.catch((error) => {
				console.log(error);
				this.setState({ error });
			});
	}

	render() {
		const { posts, error } = this.state;
		return (
			<div>
				<h1>{`/r/${this.props.subreddit}`}</h1>
				{this.state.error ? (
					<p>{`Error: ${error.message}`}</p>
				) : (
					<ul>
						{posts.map((post) => (
							<li key={[post.id]}>{post.title}</li>
						))}
					</ul>
				)}
			</div>
		);
	}
}

ReactDOM.render(<Reddit subreddit={"reactjs"} />, document.querySelector("#root"));
