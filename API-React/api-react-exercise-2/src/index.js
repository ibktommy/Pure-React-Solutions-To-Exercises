import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Reddit extends Component {
	state = {
		posts: [],
		error: "",
		loading: true,
	};

	componentDidMount() {
		//USING "FETCH"

		// fetch(`https://www.reddit.com/r/${this.props.subreddit}.json`)
		// 	.then((response) => {
		// 		if (response.status === 200) {
		// 			return response.json();
		// 		}
		// 		throw new Error("Requests Failed");
		// 	})
		// 	.then((responseData) => {
		// 		const posts = responseData.data.children.map((active) => active.data);
		// 		this.setState({ posts });
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
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
			.then((loading) => {
				this.setState({ loading });
			})
			.catch((error) => {
				console.log(error);
				this.setState({ error });
			});
	}

	render() {
		const { loading, error, posts } = this.state;

		if (error)
			return (
				<div>
					<h1>{`/r/${this.props.subreddit}`}</h1>
					<p>Error: {error.message}</p>
				</div>
			);

		if (loading)
			return (
				<div>
					<h1>{`/r/${this.props.subreddit}`}</h1>
					<p>Loading...</p>
				</div>
			);

		return (
			<div>
				<ul>
					<h1>{`/r/${this.props.subreddit}`}</h1>
					{posts.map((post) => (
						<li key={post.id}>{post.title}</li>
					))}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(<Reddit subreddit="reactjs" />, document.querySelector("#root"));
