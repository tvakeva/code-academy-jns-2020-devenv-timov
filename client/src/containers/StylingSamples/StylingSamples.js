import React from "react";
import SampleImage from "./SampleImage.jpg";
import StylingWithBootstarp from "./StylingWithBootstarp";
import StylingWithCss from "./StylingWithCss";
import StylingWithStyledComponents from "./StylingWithStyledComponents";

function StylingSamples(props) {
  return (
    <div>
      <div
        style={{
          width: "100vmin",
          height: "100vmin",
          zoom: 0.5,
          float: "left",
        }}
      >
        <h2>sample</h2>
        <img src={SampleImage} />
      </div>
      <div
        style={{
          width: "100vmin",
          height: "100vmin",
          zoom: 0.5,
          float: "left",
        }}
      >
        <h2>bootstarp</h2>
        <StylingWithBootstarp />
      </div>
      <div
        style={{
          width: "100vmin",
          height: "100vmin",
          zoom: 0.5,
          float: "left",
        }}
      >
        <h2>css</h2>
        <StylingWithCss />
      </div>
      <div
        style={{
          width: "100vmin",
          height: "100vmin",
          zoom: 0.5,
          float: "left",
        }}
      >
        <h2>styled-components</h2>
        <StylingWithStyledComponents />
      </div>
    </div>
  );
}

export default StylingSamples;
