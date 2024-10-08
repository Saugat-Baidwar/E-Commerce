import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "490px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Carousl: React.FC = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <img className="w-screen" src="Frame.png" alt="carousel img" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src="/Component22.png" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src="/Cimage2.png" alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
        <img src="/Component22.png" alt="" />
      </h3>
    </div>
  </Carousel>
);

export default Carousl;
