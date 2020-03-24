import React from "react";
import ImageInput from "../image-input/image-input";
import ImageDisplayed from "../image-displayed/image-displayed";
import Clarifai from "clarifai";
import { analyzeImage } from "../../utils/apiHelpers";
import "./demographics.scss";
import Results from "../results/results";
import Spinner from "../spinner/spinner";
const app = new Clarifai.App({
  apiKey: `xxxx`
});

class Demographics extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUrl: null,
      demographicsData: null,
      error: "",
      loading: false
    };
  }

  onSubmitHandler = async (imageInput, e) => {
    e.preventDefault();
    this.setState({
      loading: true,
      demographicsData: null,
      imageUrl: null,
      error: ""
    });



    if (!imageInput) {
      this.setState({ error: "Please enter the URI with an image of a person", loading: false });
    } else {
      /**
         * @param imageUrl - image of a person to analyze
         * @param bool - if set to true, data will be fetched from localStorage, to save API calls limit.
         */
      const demographics = await analyzeImage(imageInput, false);

      if (demographics.message && demographics.message != "") {
        this.setState({ error: demographics.message, loading: false });
      } else {
        this.setState({
          loading: false,
          imageUrl: imageInput
            ? imageInput
            : "https://engineering.unl.edu/images/staff/Kayla_Person-small.jpg",
          demographicsData: demographics
        });
      }
    }


  };

  render() {
    const { onImageUrlChangeHandler, onSubmitHandler } = this;
    const { imageUrl, demographicsData, loading, error } = this.state;
    return (
      <div className="demographics">
        {loading && <Spinner />}
        {error && <div>{error}</div>}
        {demographicsData && <Results demographicsData={demographicsData} />}
        <ImageInput
          imageUrlChangeHandler={onImageUrlChangeHandler}
          submitHandler={onSubmitHandler}
        />
        {demographicsData && <ImageDisplayed imageUrl={imageUrl} />}
      </div>
    );
  }
}

export default Demographics;
