import React from "react";


//width: 300px, height: auto
const ImageDisplayed = ({ imageUrl }) => {
  return <div>{imageUrl && <img src={imageUrl} alt="Image" />}</div>;
};

export default ImageDisplayed;
