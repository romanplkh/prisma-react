import React from "react";
import "./image-displayed.scss";

//width: 300px, height: auto
const ImageDisplayed = React.memo(({ imageUrl }) => {
  return (
    <div style={{ marginTop: "40px" }}>
      <div className="scanner"></div>
      {imageUrl && (
        <img className="image-analyzed" src={imageUrl} alt="Image" />
      )}
    </div>
  );
});

export default ImageDisplayed;
