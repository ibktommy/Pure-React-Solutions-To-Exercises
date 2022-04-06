import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

function AudioControls() {
	const [control, setControl] = useState({
		Volume: Math.floor(Math.random() * (100 - 1) + 1),
		Trebble: Math.floor(Math.random() * (100 - 1) + 1),
		Mid: Math.floor(Math.random() * (100 - 1) + 1),
		Bass: Math.floor(Math.random() * (100 - 1) + 1),
	});

	// Set Volume Btn Function
	const volumeBtnIncrease = () =>
		setControl((control) => ({ ...control, Volume: control.Volume + 1 }));
	const volumeBtnDecrease = () =>
		setControl((control) => ({ ...control, Volume: control.Volume - 1 }));

	// Set Trebble Btn Function
	const trebbleBtnIncrease = () =>
		setControl((control) => ({ ...control, Trebble: control.Trebble + 1 }));
	const trebbleBtnDecrease = () =>
		setControl((control) => ({ ...control, Trebble: control.Trebble - 1 }));

	// Set Mid Btn Function
	const midBtnIncrease = () => setControl((control) => ({ ...control, Mid: control.Mid + 1 }));
	const midBtnDecrease = () => setControl((control) => ({ ...control, Mid: control.Mid - 1 }));

	// Set Bass Btn Function
	const bassBtnIncrease = () => setControl((control) => ({ ...control, Bass: control.Bass + 1 }));
	const bassBtnDecrease = () => setControl((control) => ({ ...control, Bass: control.Bass - 1 }));

	return (
		<div className="container">
			<div className="audio-item">
				<button onClick={volumeBtnIncrease}>+</button>
				<div className="audio-text">
					<div className="audio-num">{control.Volume}</div>
					<p className="audio-name">Volume</p>
				</div>
				<button onClick={volumeBtnDecrease}>-</button>
			</div>
			<div className="audio-item">
				<button onClick={trebbleBtnIncrease}>+</button>
				<div className="audio-text">
					<div className="audio-num">{control.Trebble}</div>
					<p className="audio-name">Trebble</p>
				</div>
				<button onClick={trebbleBtnDecrease}>-</button>
			</div>
			<div className="audio-item">
				<button onClick={midBtnIncrease}>+</button>
				<div className="audio-text">
					<div className="audio-num">{control.Mid}</div>
					<p className="audio-name">Mid</p>
				</div>
				<button onClick={midBtnDecrease}>-</button>
			</div>
			<div className="audio-item">
				<button onClick={bassBtnIncrease}>+</button>
				<div className="audio-text">
					<div className="audio-num">{control.Bass}</div>
					<p className="audio-name">Bass</p>
				</div>
				<button onClick={bassBtnDecrease}>-</button>
			</div>
		</div>
	);
}

ReactDOM.render(<AudioControls />, document.querySelector("#root"));
