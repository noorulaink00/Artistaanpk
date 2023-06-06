import React from "react";
import "./ImageBox.css";

const ImageBox = (props) => {
  return (
    <div className="image-box">
      <img src={props.imgSource} alt="" />
    </div>
  );
};

export default ImageBox;
