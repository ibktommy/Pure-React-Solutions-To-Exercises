import React from "react";
import PropTypes from "prop-types";

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

export default FileIcon;
