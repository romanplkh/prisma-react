import React from "react";
import "./image-displayed.scss";

//width: 300px, height: auto
const ImageDisplayed = React.memo(({ imageUrl }) => {
  return (
    <div style={{ marginTop: "40px" }}>
      <div className="scanner"></div>
      {imageUrl && (
        <img
          style={{ width: "350px", height: "auto", filter: "grayscale(100%)" }}
          src={imageUrl}
          alt="Image"
        />
      )}
    </div>
  );
});

export default ImageDisplayed;
