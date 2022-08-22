import React from "react";

const Box = (props) => {
  return (
    <div className={`box ${props.result}`}>
      <h1>{props.title}</h1>
      <h2>{props.item && props.item.name}</h2>
      <img
        className="item-img"
        src={props.item && props.item.img}
        alt="images"
      />
      <h1>{props.result}</h1>
    </div>
  );
};

export default Box;
