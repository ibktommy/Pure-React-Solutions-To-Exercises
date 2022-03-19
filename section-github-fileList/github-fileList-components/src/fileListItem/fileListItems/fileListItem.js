import React from "react";
import PropTypes from "prop-types";
import FileName from "./fileName";
import CommitMessage from "./commitMessage";
import Time from "./Time";

// File List Item Sub-Component - 1
const FileListItem = ({ file }) => (
	<div className="file-list-item">
		<FileName file={file} />
		<CommitMessage commit={file.latestCommit} />
		<div className="age">
			<Time time={file.updated_at} />
		</div>
	</div>
);
FileListItem.propTypes = {
	file: PropTypes.object.isRequired,
};

export default FileListItem;
