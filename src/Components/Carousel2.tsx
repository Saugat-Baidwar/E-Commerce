import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "290px",
  width: "200px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Carousel2: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <img className="w-screen" src="Frame.png" alt="carousel img" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src="Cimage2.png" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default Carousel2;
