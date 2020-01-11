import React from "react";
import ImageInput from "../image-input/image-input";
import ImageDisplayed from "../image-displayed/image-displayed";
import Clarifai from "clarifai";
import { getData } from "../../utils/apiHelpers";
import "./demographics.scss";
import Results from "../results/results";
const app = new Clarifai.App({
  apiKey: `xxxx`
});

class Demographics extends React.Component {
  constructor() {
    super();
    this.state = {
      imageInput: "",
      imageUrl: null,
      demographicsData: null
    };
  }

  onImageUrlChangeHandler = e => {
    this.setState({ imageInput: e.target.value });
  };

  onSubmitHandler = () => {
    const { imageInput } = this.state;

    const demographics = getData(imageInput);

    this.setState({
      imageUrl: imageInput,
      demographicsData: demographics
    });
  };

  render() {
    const { onImageUrlChangeHandler, onSubmitHandler } = this;
    const { imageUrl, demographicsData } = this.state;
    return (
      <div className="demographics">
        {demographicsData && <Results demographicsData={demographicsData} />}
        <ImageInput
          imageUrlChangeHandler={onImageUrlChangeHandler}
          submitHandler={onSubmitHandler}
        />
        <ImageDisplayed imageUrl={imageUrl} />
      </div>
    );
  }
}

export default Demographics;
