import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PropTypes from "prop-types";

// TRELLO DATA
const trelloData = [
	{
		id: 0,
		header: "Phone Features",
		listItem: [
			{
				id: 0,
				itemText: "Subwoofer",
			},
			{
				id: 1,
				itemText: "Non-porous, washable",
			},
			{
				id: 2,
				itemText: "Wings",
			},
			{
				id: 3,
				itemText: "Beveled Bezel",
			},
			{
				id: 4,
				itemText: "Bezelled Bevel",
			},
			{
				id: 5,
				itemText: "Seedless",
			},
		],
		footer: "Add a card...",
	},
	{
		id: 1,
		header: "Phone Features",
		listItem: [
			{
				id: 0,
				itemText: "Subwoofer",
			},
			{
				id: 1,
				itemText: "Non-porous, washable",
			},
			{
				id: 2,
				itemText: "Wings",
			},
			{
				id: 3,
				itemText: "Beveled Bezel",
			},
			{
				id: 4,
				itemText: "Bezelled Bevel",
			},
			{
				id: 5,
				itemText: "Seedless",
			},
		],
		footer: "Add a card...",
	},
	{
		id: 2,
		header: "Phone Features",
		listItem: [
			{
				id: 0,
				itemText: "Subwoofer",
			},
			{
				id: 1,
				itemText: "Non-porous, washable",
			},
			{
				id: 2,
				itemText: "Wings",
			},
			{
				id: 3,
				itemText: "Beveled Bezel",
			},
			{
				id: 4,
				itemText: "Bezelled Bevel",
			},
			{
				id: 5,
				itemText: "Seedless",
			},
		],
		footer: "Add a card...",
	},
];

function TrelloContainer({ cardBox }) {
	return (
		<div className="trello-container center">
			{cardBox.map((card) => (
				<TrelloCard card={card} key={card.id} />
			))}
		</div>
	);
}
// Trello container PropTypes
TrelloContainer.propTypes = {
	cardBox: PropTypes.array.isRequired,
};

// TRELLO CARD
function TrelloCard({ card }) {
	return (
		<div className="trello-card">
			<Header card={card} />
			<CardList items={card.listItem} />
			<Footer footer={card.footer} />
		</div>
	);
}
// Trello Card Prop Type
TrelloCard.propTypes = {
	card: PropTypes.object.isRequired,
};

// Header Component
const Header = ({ card }) => {
	return (
		<div className="header center">
			<HeaderText title={card.header} />
			<HeaderIcon />
		</div>
	);
};
// Header Prop Type
Header.propTypes = {
	card: PropTypes.object.isRequired,
};

// Header Text Component
const HeaderText = ({ title }) => <div className="title">{title}</div>;
// Header Text Prop Type
HeaderText.propTypes = {
	title: PropTypes.string.isRequired,
};

// Header Icon Component
const HeaderIcon = () => <i className="fa fa-ellipsis-h"></i>;
// Header Icon Prop Type
HeaderIcon.propTypes = PropTypes.string.isRequired;

// CardList
function CardList({ items }) {
	return (
		<div className="card-list">
			{items.map((item) => (
				<ItemContainer listItem={item} key={item.id} />
			))}
		</div>
	);
}
// CardList Prop Type
CardList.propTypes = {
	items: PropTypes.array.isRequired,
};

const ItemContainer = ({ listItem }) => <div className="item-container">{listItem.itemText}</div>;
// Item Container Prop Type
ItemContainer.propTypes = {
	listItem: PropTypes.object.isRequired,
};

//Footer Component
const Footer = ({ footer }) => <div className="footer">{footer}</div>;
// Footer Prop Type
Footer.propTypes = {
	footer: PropTypes.string.isRequired,
};

// Where we render our main component
ReactDOM.render(<TrelloContainer cardBox={trelloData} />, document.querySelector("#root"));
