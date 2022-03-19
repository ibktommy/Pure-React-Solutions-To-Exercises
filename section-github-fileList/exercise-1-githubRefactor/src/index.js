import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";
import Time from "./Time";

// OBJECT DATA
const testFiles = [
	{
		id: 1,
		name: "src",
		type: "folder",
		updated_at: "2022-03-17 21:24:00",
		latestCommit: {
			message: "Initial commit",
		},
	},
	{
		id: 2,
		name: "tests",
		type: "folder",
		updated_at: "2022-03-17 21:24:00",
		latestCommit: {
			message: "Initial commit",
		},
	},
	{
		id: 3,
		name: "README",
		type: "file",
		updated_at: "2022-03-17 21:24:00",
		latestCommit: {
			message: "Added a readme",
		},
	},
];

// FILE LIST COMPONENT - PARENT
const FileList = ({ files }) => (
	<div className="file-list">
		<div>
			{files.map((file) => (
				<FileListItem file={file} key={file.id} />
			))}
		</div>
	</div>
);
FileList.propTypes = {
	files: PropTypes.array,
};

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

// File Icon Sub-Component - 2
function FileIcon({ file }) {
	let icon = "fa-file-image";
	if (file.type === "folder") {
		icon = "fa-folder";
	}

	return (
		<span className="file-icon">
			<i className={`fa ${icon}`} />
		</span>
	);
}
FileIcon.propTypes = {
	file: PropTypes.object.isRequired,
};

// File Name Sub-Component - 3
function FileName({ file }) {
	return (
		<div className="file-folder-box">
			<FileIcon file={file} />
			<span className="file-name">{file.name}</span>
		</div>
	);
}
FileName.propTypes = {
	file: PropTypes.object.isRequired,
};

// CommitMessage Sub-Component - 4
const CommitMessage = ({ commit }) => <div className="commit-message">{commit.message}</div>;
CommitMessage.propTypes = {
	commit: PropTypes.object.isRequired,
};

// Time Sub-Component - 5

// Render To DOM
ReactDOM.render(<FileList files={testFiles} />, document.querySelector("#root"));
