import React from "react";
import { useState } from "react";

import BmiTextfield from "./Bmicomponents/input";

const Bmi = () => {
  const [gender, setgender] = useState("");
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [age, setage] = useState("");
  const handleClick = () => {
    let status = "";
    if (
      height.toLocaleLowerCase().endsWith("meters") &&
      weight.toLocaleLowerCase().endsWith("kg")
    ) {
      let height_ = height.split("m");
      let weight_ = weight.split("k");
      let bmi = parseInt(weight_[0]) / parseInt(Math.pow(height_[0], 2));
      if (bmi <= 18.4) {
        status = "Underweight";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal";
      } else if (bmi >= 25.0 && bmi <= 39.9) {
        status = "Overweight";
      } else if (bmi >= 40.0) {
        status = "Obese";
      }
      alert(
        "Gender : " +
          gender +
          "Height : " +
          height_[0] +
          "--" +
          "Weight : " +
          weight_[0] +
          "------" +
          "Bmi :" +
          bmi +
          " " +
          "Status : " +
          status
      );
    } else if (
      height.toLocaleLowerCase().endsWith("inches") &&
      weight.toLocaleLowerCase().endsWith("lb")
    ) {
      let height_ = height.split("i");
      let weight_ = weight.split("l");
      let bmi =
        (parseInt(weight_[0]) / parseInt(Math.pow(height_[0], 2))) * 703;
      if (bmi <= 18.4) {
        status = "Underweight";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal";
      } else if (bmi >= 25.0 && bmi <= 39.9) {
        status = "Overweight";
      } else if (bmi >= 40.0) {
        status = "Obese";
      }
      alert(
        "Gender : " +
          gender +
          "Height : " +
          height_[0] +
          "--" +
          "Weight : " +
          weight_[0] +
          "------" +
          "Bmi :" +
          bmi +
          " " +
          "Status : " +
          status
      );
    }
  };
  return (
    <center>
      <div class="container overflow-hidden ">
        <div class="row gy-5">
          <div class="col-6">
            Gender
            <BmiTextfield
              placeholder="Enter Gender"
              set={(sg) => setgender(sg)}
            />
          </div>
          <div class="col-6">
            Height
            <BmiTextfield
              placeholder="Enter Height in Meters OR Inches"
              set={(sh) => setheight(sh)}
            />
          </div>
          <div class="col-6">
            Weight
            <BmiTextfield
              placeholder={
                height.endsWith("meters")
                  ? "Enter Weight in Kg"
                  : "Enter Weight in lb"
              }
              set={(sg) => setweight(sg)}
            />
          </div>
          <div class="col-6">
            Age
            <BmiTextfield placeholder="Enter Age" set={(sg) => setage(sg)} />
          </div>
        </div>
        <br />
        <br />
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => handleClick()}
        >
          Calculate BMS
        </button>
      </div>
    </center>
  );
};

export default Bmi;

// BMI= weight in kg height2 in m
// BMI = weight ÷ height2

// In metric units: BMI = weight (kg) ÷ height2 (meters)
// In US units: BMI = weight (lb) ÷ height2 (inches) * 703
