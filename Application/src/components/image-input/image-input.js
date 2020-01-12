import React, { useState } from "react";
import "./image-input.scss";

const ImageInput = ({ submitHandler }) => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div>
      <p>Put a person image link here: </p>
      <form onSubmit={e => submitHandler(imageUrl, e)}>
        <input
          type="url"
          className="image-input"
          onChange={e => setImageUrl(e.target.value)}
          placeholder="Image URL"
          value={imageUrl}
        />
        <button className="button-action" type="submit">
          Analyse
        </button>
      </form>
    </div>
  );
};

export default ImageInput;
