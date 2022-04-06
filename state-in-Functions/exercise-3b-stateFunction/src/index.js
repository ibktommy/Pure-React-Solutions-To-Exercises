import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function AudioControls() {
	// Set Number Range Function
	const range = (max, min) => Math.floor(Math.random() * (max - min) + min);

	// Set state
	const [volume, setVolume] = useState(range(100, 1));
	const [trebble, setTrebble] = useState(range(100, 1));
	const [mid, setMid] = useState(range(100, 1));
	const [bass, setBass] = useState(range(100, 1));

	// Volume Function
	const volumeIncrease = () => setVolume((volume) => volume + 1);
	const volumeDecrease = () => setVolume((volume) => volume - 1);

	// Trebble Function
	const trebbleIncrease = () => setTrebble((trebble) => trebble + 1);
	const trebbleDecrease = () => setTrebble((trebble) => trebble - 1);

	// Mid Function
	const midIncrease = () => setMid((mid) => mid + 1);
	const midDecrease = () => setMid((mid) => mid - 1);

	// Bass Function
	const bassIncrease = () => setBass((bass) => bass + 1);
	const bassDecrease = () => setBass((bass) => bass - 1);

	// Render Component
	return (
		<div className="container">
			<div className="audio-item">
				<button onClick={volumeIncrease}>+</button>
				<div className="audio-text">
					<div className="audio-num">{volume}</div>
					<p className="audio-name">Volume</p>
				</div>
				<button onClick={volumeDecrease}>-</button>
			</div>
			<div className="audio-item">
				<button onClick={trebbleIncrease}>+</button>
				<div className="audio-text">
					<div className="audio-num">{trebble}</div>
					<p className="audio-name">Trebble</p>
				</div>
				<button onClick={trebbleDecrease}>-</button>
			</div>
			<div className="audio-item">
				<button onClick={midIncrease}>+</button>
				<div className="audio-text">
					<div className="audio-num">{mid}</div>
					<p className="audio-name">mid</p>
				</div>
				<button onClick={midDecrease}>-</button>
			</div>
			<div className="audio-item">
				<button onClick={bassIncrease}>+</button>
				<div className="audio-text">
					<div className="audio-num">{bass}</div>
					<p className="audio-name">Bass</p>
				</div>
				<button onClick={bassDecrease}>-</button>
			</div>
		</div>
	);
}

ReactDOM.render(<AudioControls />, document.querySelector("#root"));
