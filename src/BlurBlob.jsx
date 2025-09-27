// BlurBlob.jsx
import React from "react";
import PropTypes from "prop-types";

const BlurBlob = ({ size, position, className }) => {
  const { width, height } = size;
  const { top, left } = position;

  return (
    <div
      className={`absolute ${className}`}
      style={{
        width,
        height,
        top,
        left,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-full h-full bg-purple-700 rounded-full opacity-30 blur-3xl animate-blob"></div>
    </div>
  );
};

BlurBlob.propTypes = {
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  className: PropTypes.string,
};

export default BlurBlob;
