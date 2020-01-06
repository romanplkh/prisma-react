import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import ImageInput from "./components/image-input/image-input";
import Particles from "react-particles-js";
import { particlesConfig } from "./particles.config";
import Clarifai from "clarifai";
import { Demographics } from "./components/demographics/demographics";
import ImageDisplayed from "./components/image-displayed/image-displayed";

// initialize with your api key. This will also work in your browser via http://browserify.org/

const app = new Clarifai.App({
  apiKey: "*REMOVED*"
});

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      imageInput: "",
      imageUrl: null
    };
  }

  onImageUrlChangeHandler = e => {
    this.setState({ imageInput: e.target.value });
  };

  onSubmitHandler = () => {
    const { imageInput } = this.state;
    this.setState({ imageUrl: imageInput });

    console.log(JSON.parse(localStorage.getItem("data")));

    const results = JSON.parse(localStorage.getItem("data"));

    const ageArray =
      results.outputs[0].data.regions[0].data.face.age_appearance.concepts;

    const genderArray =
      results.outputs[0].data.regions[0].data.face.gender_appearance.concepts;

    const raceArray =
      results.outputs[0].data.regions[0].data.face.multicultural_appearance
        .concepts;

    console.log(ageArray, genderArray, raceArray);

    // app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, imageInput).then(
    //   function(response) {
    //     // do something with response
    //     console.log(response);

    //     localStorage.setItem("data", JSON.stringify(response));
    //   },
    //   function(err) {
    //     // there was an error
    //   }
    // );
  };

  render() {
    const { onImageUrlChangeHandler, onSubmitHandler } = this;

    const { imageUrl } = this.state;

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Particles className="particles" params={particlesConfig} />
          <ImageInput
            imageUrlChangeHandler={onImageUrlChangeHandler}
            submitHandler={onSubmitHandler}
          />
          <ImageDisplayed imageUrl={imageUrl} />
        </div>

        <Demographics />
      </div>
    );
  }
}

export default App;
