import React, { Component } from "react";
import ReactDOM from "react-dom";

class House extends Component {
	state = {
		kitchen: true,
		bathroom: false,
		livingRoom: true,
		bedroom: false,
	};

	handleKitchen = () => {
		this.setState((state) => {
			return {
				kitchen: !state.kitchen,
			};
		});
	};
	handleBathroom = () => {
		this.setState((state) => {
			return {
				bathroom: !state.bathroom,
			};
		});
	};
	handleLivingRoom = () => {
		this.setState((state) => {
			return {
				livingRoom: !state.livingRoom,
			};
		});
	};
	handleBedroom = () => {
		this.setState((state) => {
			return {
				bedroom: !state.bedroom,
			};
		});
	};

	render() {
		return (
			<div className="rooms">
				<div className="room">
					<button onClick={this.handleKitchen}>Kitchen Switch</button>
					{this.state.kitchen ? <p>Light is ON</p> : <p>Light is OFF</p>}
				</div>
				<div className="room">
					<button onClick={this.handleBathroom}>Bathroom Switch</button>
					{this.state.bathroom ? <p>Light is ON</p> : <p>Light is OFF</p>}
				</div>
				<div className="room">
					<button onClick={this.handleLivingRoom}>Living Room Switch</button>
					{this.state.livingRoom ? <p>Light is ON</p> : <p>Light is OFF</p>}
				</div>
				<div className="room">
					<button onClick={this.handleBedroom}>Bedroom Switch</button>
					{this.state.bedroom ? <p>Light is ON</p> : <p>Light is OFF</p>}
				</div>
			</div>
		);
	}
}

ReactDOM.render(<House />, document.querySelector("#root"));
