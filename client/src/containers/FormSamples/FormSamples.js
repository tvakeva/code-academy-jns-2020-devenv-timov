import React from "react";

import FormWithHooks from "./FormWithHooks";
import FormWithFormik from "./FormWithFormik";

function FormSamples(props) {
  return (
    <div>
      <div
        style={{
          width: "100vmin",
          height: "100vmin",
          zoom: 0.5,
          float: "left",
          margin: "10px",
          padding: "10px",
          border: "1px solid black",
        }}
      >
        <h2>with hooks</h2>
        <FormWithHooks />
      </div>
      <div
        style={{
          width: "100vmin",
          height: "100vmin",
          zoom: 0.5,
          float: "left",
          margin: "10px",
          padding: "10px",
          border: "1px solid black",
        }}
      >
        <h2>with formik</h2>
        <FormWithFormik />
      </div>
    </div>
  );
}

export default FormSamples;
