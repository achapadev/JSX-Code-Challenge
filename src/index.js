//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1>Adrian's favorite games</h1>
    <ul>
      <li>WoW</li>
      <li>LoL</li>
      <li>Call of Duty</li>
    </ul>
  </div>,
  document.querySelector("#root")
);
