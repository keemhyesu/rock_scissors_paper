import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src="https://www.joinusonline.net/pub/media/catalog/product/cache/c9a86b5d6ed7765664725105f8d84377/s/m/small_scissor_green.jpg"
        alt="scissors"
      />
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
