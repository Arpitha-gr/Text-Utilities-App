import React, { useState } from "react";
import "./TextForm.css";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleUppercase = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
    props.showAlert("Successfully Converted to Uppercase", "success");
  };

  const handleLowercase = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.showAlert("Successfully Converted to Lowercase", "success");
  };

  const handleCapitalize = () => {
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const caps = text.split(" ").map(capitalize).join(" ");
    setText(caps);
    props.showAlert("Successfully Capitalized", "success");
  };

  const handleCopy = () => {
    // selecting the text field
    var text = document.getElementById("myBox");
    text.select();
    // copy the text to clipboard
    navigator.clipboard.writeText(text.value);
    // deselect once copied
    document.getSelection().removeAllRanges();
    props.showAlert("Successfully Copied the Text", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Successfully Cleared the Space", "success");
  };

  const handleRemoveSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Successfully Removed the Extra Spaces", "success");
  };

  const darkStyle = {
    backgroundColor: "#092652",
    color: "#fff",
  };
  const lightStyle = {
    backgroundColor: "#fff",
    color: "black",
  };

  const btnDark = {
    backgroundColor: "#0d6efd",
    color: "#fff",
  };

  const btnLight = {
    backgroundColor: "#ffc107",
    color: "black",
  };

  return (
    <div style={props.mode === "dark" ? darkStyle : lightStyle}>
      <div className="textForm m-auto py-3">
        <h1 className="heading">Enter the text below to analyze</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            id="myBox"
            style={props.mode === "dark" ? darkStyle : lightStyle}
            rows="8"
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleUppercase}
          className="btn btn-lg mx-3 mt-3"
          style={props.mode === "dark" ? btnDark : btnLight}
          disabled={text.length===0}
        >
          Convert to Uppercase
        </button>

        <button
          type="button"
          onClick={handleLowercase}
          className="btn btn-lg mx-3 mt-3"
          style={props.mode === "dark" ? btnDark : btnLight}
          disabled={text.length===0}
        >
          Convert to Lowercase
        </button>

        <button
          type="button"
          onClick={handleCapitalize}
          className="btn btn-lg mx-3 mt-3"
          style={props.mode === "dark" ? btnDark : btnLight}
          disabled={text.length===0}
        >
          Capitalize Text
        </button>

        <button
          type="button"
          onClick={handleCopy}
          className="btn btn-lg mx-3 mt-3"
          style={props.mode === "dark" ? btnDark : btnLight}
          disabled={text.length===0}
        >
          Copy Text
        </button>

        <button
          type="button"
          onClick={handleClear}
          className="btn btn-lg mx-3 mt-3"
          style={props.mode === "dark" ? btnDark : btnLight}
          disabled={text.length===0}
        >
          Clear Text
        </button>

        <button
          type="button"
          onClick={handleRemoveSpaces}
          className="btn btn-lg mx-3 mt-3"
          style={props.mode === "dark" ? btnDark : btnLight}
          disabled={text.length===0}
        >
          Remove Extra Spaces
        </button>

        <div className="mt-5">
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").filter((element) => element.length !== 0).length}{" "}
            words and {text.length} characters
          </p>
          <p>
            {0.008 * text.split(" ").filter((element) => element.length !== 0)
                .length}{" "} minutes read
          </p>
          <h1>Preview</h1>
          <p>{text.length === 0 ? "Nothing to preview" : `${text}`}</p>
        </div>
      </div>
    </div>
  );
}

export default TextForm;
