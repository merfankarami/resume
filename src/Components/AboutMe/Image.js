import React from "react";

import erfan from "../../Media/erfan.jpg";
import photo from "../../Media/photo-frame.png";
import "./Image.css";

export default function Image() {
  return (
    <div >
      <img className="Image" src={erfan} alt="erfan's pic" />
      <img className="Frame" src={photo} alt="frame's pic" />
    </div>
  );
}
