import Li from "./Components/Li/Li";
import Mouse from "./Components/MouseIcon/Mouse";
import ElevateAppBar from "./Components/AppBar/Bar";
import Title from "./Components/Typography/Typograhpy";
import About from "./Components/AboutMe/About";
import { Link, Route, Switch } from "react-router-dom";
import pic from "./Media/negative-space.jpg";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Route path="/">
        <div className="bgContainer">
          <img src={pic} alt="negative-space" />
        </div>
        <div className="Container">
          <div className="intro">
            <div className="intro-sub">I am Mohammad Erfan Karami</div>
            <h1>
              Creative <span> Designer</span>
            </h1>
            <div className="intro-description">
              I am a fully professional freelance creative User Interface
              Designer & Developer Involving with latest web designing and
              technologies is a great feel free to contact creative.
            </div>
            <div className="social-icons">
              <ul className="list-inline">
                <Li href="#">mail_outline</Li>
                <Li href="#">link</Li>
                <Li href="#">phone</Li>
              </ul>
            </div>
          </div>
          <Mouse />
        </div>
      </Route>
      <ElevateAppBar />
      <Title>About Me</Title>
      <Route path="/about">
        <About />
      </Route>
    </div>
  );
}
