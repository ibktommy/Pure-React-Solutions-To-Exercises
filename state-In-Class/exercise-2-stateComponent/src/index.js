import React, { Component } from "react";
import ReactDOM from "react-dom";

class House extends Component {
	state = {
		rooms: {
			bathroom: false,
			bedroom: false,
			kitchen: true,
			livingRoom: true,
		},
	};

	// Button Functions
	BathroomFunc = () => {
		this.setState({
			rooms: {
				bathroom: !this.state.rooms.bathroom,
				bedroom: this.state.rooms.bedroom,
				kitchen: this.state.rooms.kitchen,
				livingRoom: this.state.rooms.livingRoom,
			},
		});
	};
	BedroomFunc = () => {
		this.setState({
			rooms: {
				bedroom: !this.state.rooms.bedroom,
				bathroom: this.state.rooms.bathroom,
				livingRoom: this.state.rooms.livingRoom,
				kitchen: this.state.rooms.kitchen,
			},
		});
	};
	KitchenFunc = () => {
		this.setState({
			rooms: {
				kitchen: !this.state.rooms.kitchen,
				bathroom: this.state.rooms.bathroom,
				bedroom: this.state.rooms.bedroom,
				livingRoom: this.state.rooms.livingRoom,
			},
		});
	};
	LivingRoomFunc = () => {
		this.setState({
			rooms: {
				livingRoom: !this.state.rooms.livingRoom,
				kitchen: this.state.rooms.kitchen,
				bedroom: this.state.rooms.bedroom,
				bathroom: this.state.rooms.bathroom,
			},
		});
	};

	render() {
		return (
			<div className="rooms">
				<div className="room">
					<button onClick={this.BathroomFunc}>Bathroom Switch</button>
					{this.state.rooms.bathroom ? <p>Light is ON</p> : <p>Light is OFF</p>}
				</div>
				<div className="room">
					<button onClick={this.BedroomFunc}>Bedroom Switch</button>
					{this.state.rooms.bedroom ? <p>Light is ON</p> : <p>Light is OFF</p>}
				</div>
				<div className="room">
					<button onClick={this.KitchenFunc}>Kitchen Switch</button>
					{this.state.rooms.kitchen ? <p>Light is ON</p> : <p>Light is OFF</p>}
				</div>
				<div className="room">
					<button onClick={this.LivingRoomFunc}>Living Room Switch</button>
					{this.state.rooms.livingRoom ? <p>Light is ON</p> : <p>Light is OFF</p>}
				</div>
			</div>
		);
	}
}

ReactDOM.render(<House />, document.querySelector("#root"));
