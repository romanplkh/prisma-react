import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/navbar";
import Particles from "react-particles-js";
import { particlesConfig } from "./particles.config";

import Demographics from "./components/demographics/demographics";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Particles className="particles" params={particlesConfig} />
        <h1 className="heading">Prisma - Demographics analyzer</h1>
        <div className="container">
          <Demographics />
        </div>
      </div>
    );
  }
}

export default App;
