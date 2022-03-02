import React from "react";

function Alert(props) {
    const darkStyle = {
        backgroundColor: "#092652",
        height: '50px'
      }
    const lightStyle = {
        backgroundColor: "#fff",
        height: '50px'
      }
  return (
      <div style={props.mode==='dark'?darkStyle:lightStyle}>
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {props.alert.msg}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>}
    </div>
  );
}

export default Alert;
