import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const curr = date.getHours();

let greeting;

const customStyle = {
  color: ""
};

if (curr < 12) {
  greeting = "god morning";
  customStyle.color = "red";
} else if (curr >= 12 && curr <= 18) {
  greeting = "god afternoon";
  customStyle.color = "green";
} else {
  greeting = "god night";
  customStyle.color = "yellow";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
