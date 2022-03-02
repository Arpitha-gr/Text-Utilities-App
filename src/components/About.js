import React from "react";

function About(props) {
  const darkStyle = {
    backgroundColor: "#092652",
    color: "#fff",
    height: "100vh"
  };
  const lightStyle = {
    backgroundColor: "#fff",
    color: "black",
    height: "100vh"
  };
  return (
    <div className="about p-5" style={props.mode === "dark" ? darkStyle : lightStyle}>
      <h1>Text Utility is an app that helps you to analyze your text such as counting words, characters, converting to uppercase and vice-versa etc.</h1>
    </div>  
  );
}

export default About;
