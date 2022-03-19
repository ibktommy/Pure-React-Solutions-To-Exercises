import React from "react";
import PropTypes from "prop-types";

// CommitMessage Sub-Component - 4
const CommitMessage = ({ commit }) => <div className="commit-message">{commit.message}</div>;
CommitMessage.propTypes = {
	commit: PropTypes.object.isRequired,
};

export default CommitMessage;
