import React from "react";

function Box(props) {
  return (
    <>
      <div className="Box">
        Box{props.num}
        <p>{props.name}</p>
      </div>
    </>
  );
}

export default Box;
