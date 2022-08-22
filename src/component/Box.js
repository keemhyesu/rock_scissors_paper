import React from "react";

const Box = (props) => {
  console.log("props", props);
  return (
    <div className={`box ${props.result}`}>
      <h1>{props.title}</h1>
      <h2>{props.item && props.item.name}</h2>
      <img className="item-img" src={props.item && props.item.img} alt="img" />
      <h1>{props.result}</h1>
    </div>
  );
};

export default Box;
