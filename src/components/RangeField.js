import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Row } from "react-bootstrap";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const RangeField = ({ id, val, handleChange, min, max, type }) => {
  return (
    <>
      <Row style={{ padding: "10px" }}>
        {val[0]}
        <span style={{ marginLeft: "auto" }}>{val[1]}</span>
      </Row>
      <Range
        step={10}
        min={min}
        max={max}
        tipFormatter={(value) => `${value}`}
        onChange={(values) => {
          handleChange(values, id, type);
        }}
      />
    </>
  );
};

export default RangeField;
