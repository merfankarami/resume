import Li from "./Components/Li/Li";
import Mouse from "./Components/MouseIcon/Mouse";
import pic from "./Media/negative-space.jpg";

import "./App.css";

export default function App() {
  return (
    <div className="Container">
      <div className="bgContainer">
        <img src={pic} alt="negative-space" />
      </div>
      <div className="intro">
        <div className="intro-sub">I am Mohammad Erfan Karami</div>
        <h1>
          Creative <span> Designer</span>
        </h1>
        <div className="intro-description">
          I am a fully professional freelance creative User Interface Designer &
          Developer Involving with latest web designing and technologies is a
          great feel free to contact creative.
        </div>
        <div className="social-icons">
          <ul className="list-inline">
            <div><Li href="#">mail_outline</Li></div>
            <div><Li href="#">link</Li></div>
            <div><Li href="#">phone</Li></div>
          </ul>
        </div>
      </div>
      <Mouse />
    </div>
  );
}
