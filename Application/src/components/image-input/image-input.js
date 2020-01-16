import React, { useState } from "react";
import "./image-input.scss";

const ImageInput = ({ submitHandler }) => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <form onSubmit={e => submitHandler(imageUrl, e)}>
      <p>Put a person image link here: </p>
      <input
        type="url"
        className="image-input"
        onChange={e => setImageUrl(e.target.value)}
        placeholder="Image URL"
        value={imageUrl}
      />
      <button className="button-action" type="submit">
        Analyze
      </button>
    </form>
  );
};

export default ImageInput;
