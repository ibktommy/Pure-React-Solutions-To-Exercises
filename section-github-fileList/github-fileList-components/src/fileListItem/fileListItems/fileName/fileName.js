import React from "react";
import PropTypes from "prop-types";
import FileIcon from "./fileName/fileIcon";

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

export default FileName;
