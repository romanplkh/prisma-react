import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import ImageInput from "./components/image-input/image-input";
import Particles from "react-particles-js";
import { particlesConfig } from "./particles.config";
import Clarifai from "clarifai";

// initialize with your api key. This will also work in your browser via http://browserify.org/

const app = new Clarifai.App({
  apiKey: "*REMOVED*"
});

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      imageUrl: ""
    };
  }

  onImageUrlChangeHandler = e => {
    console.log(e.target.value);
  };

  onSubmitHandler = () => {
    console.log("clicked");

    app.models
      .predict(
        "c0c0ac362b03416da06ab3fa36fb58e3",
        "https://samples.clarifai.com/demographics.jpg"
      )
      .then(
        function(response) {
          // do something with response
          console.log(response);
        },
        function(err) {
          // there was an error
        }
      );
  };

  render() {
    const { onImageUrlChangeHandler, onSubmitHandler } = this;

    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Particles className="particles" params={particlesConfig} />
          <ImageInput
            imageUrlChangeHandler={onImageUrlChangeHandler}
            submitHandler={onSubmitHandler}
          />
        </div>

        {/*   <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
