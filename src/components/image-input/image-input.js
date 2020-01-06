import React from "react";

const ImageInput = ({ imageUrlChangeHandler, submitHandler }) => {
  return (
    <div>
      <p>Put your link here: </p>
      <div>
        <input type="text" onChange={imageUrlChangeHandler} />
        <button onClick={submitHandler}>Analyse</button>
      </div>
    </div>
  );
};

export default ImageInput;
