import React from "react";

import "./Li.css";

export default function Li({ children, href }) {
  return (
    <li>
      <a href={href}>
        <span className="material-icons" class="material-icons">
          {children}
        </span>
      </a>
    </li>
  );
}
