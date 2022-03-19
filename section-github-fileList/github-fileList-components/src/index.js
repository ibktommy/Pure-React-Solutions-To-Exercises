import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./index.css";
import "./all.css";
import FileListItem from "./fileListItem/fileListItem";

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

ReactDOM.render(<FileList files={testFiles} />, document.querySelector("#root"));
