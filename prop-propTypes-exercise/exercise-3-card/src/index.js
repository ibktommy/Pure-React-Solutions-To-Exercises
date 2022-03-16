import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";

// ********************************************************
// *******************************************************

// Bank Name
function Bank({ bankCard }) {
	return <h2 className="text-title">{bankCard}</h2>;
}
// Bank Card Number
function CardNum({ cardNum }) {
	return <p className="text-para">{cardNum}</p>;
}

// Bank Exp. Date
function Date({ expDate }) {
	const { dateText, date } = expDate;
	return (
		<div className="text-date">
			<span className="date-text">{dateText}</span>
			<span className="date-num">{date}</span>
		</div>
	);
}

// Client Name
function ClientName({ name }) {
	return <h3 className="name">{name}</h3>;
}

// CreditCard Component
function CreditCard({ cardInfo }) {
	return (
		<div className="card-info">
			<Bank bankCard={cardInfo.bankName} />
			<CardNum cardNum={cardInfo.cardNumber} />
			<Date expDate={cardInfo.cardDate} />
			<ClientName name={cardInfo.cardName} />
		</div>
	);
}

// CreditCard ProtoType
CreditCard.propTypes = {
	cardInfo: PropTypes.shape({
		bankName: PropTypes.string.isRequired,
		cardNumber: PropTypes.string.isRequired,
		cardDate: PropTypes.shape({
			dateText: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired,
		}),
		cardName: PropTypes.string.isRequired,
	}),
};

// CardInfo Object
const cardInfo = {
	bankName: "Fidelity Bank",
	cardNumber: 1234 + " " + 5678 + " " + 8765 + " " + 4321,
	cardDate: {
		dateText: "VALID THRU",
		date: "08/19",
	},
	cardName: "Mr Reese",
};

ReactDOM.render(<CreditCard cardInfo={cardInfo} />, document.querySelector("#root"));

// ********************************************************
// *******************************************************
// ********************************************************************
// *******************************************************************

// function CreditCard({ cardInfo }) {
// 	var { person, expiration, creditCard, bankName } = cardInfo;
// 	return (
// 		<div className="credit-card">
// 			<div className="bank-name">{bankName}</div>
// 			<div className="card-number">{creditCard}</div>
// 			<div className="first-four-digits">{creditCard.substring(0, 4)}</div>
// 			<div className="expiration">
// 				<span className="valid-thru">VALID THRU</span> {expiration}
// 			</div>
// 			<div className="name">{person}</div>
// 		</div>
// 	);
// }

// CreditCard.propTypes = {
// 	cardInfo: PropTypes.shape({
// 		person: PropTypes.string.isRequired,
// 		expiration: PropTypes.string.isRequired,
// 		creditCard: PropTypes.string.isRequired,
// 		bankName: PropTypes.string.isRequired,
// 	}).isRequired,
// };

// const details = {
// 	person: "Jigyasu",
// 	expiration: "08 / 19",
// 	creditCard: "1234 5678 8765 4321",
// 	bankName: "Big Bank, Inc",
// };

// ReactDOM.render(<CreditCard cardInfo={details} />, document.querySelector("#root"));
