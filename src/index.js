import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";
const currentDate = new Date(); // get the current date
const year = currentDate.getFullYear(); // get the year for the current date

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
