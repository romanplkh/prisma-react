import React from "react";

const ImageInput = ({ imageUrlChangeHandler, submitHandler }) => {
  return (
    <div>
      <p>Put a person image link here: </p>
      <div>
        <input type="text" onChange={imageUrlChangeHandler} />
        <button onClick={submitHandler}>Analyse</button>
      </div>
    </div>
  );
};

export default ImageInput;
