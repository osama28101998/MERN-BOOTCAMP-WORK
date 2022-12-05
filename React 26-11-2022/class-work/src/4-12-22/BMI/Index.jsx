import React from "react";
import { useState } from "react";
import BmiRadio from "./Bmicomponents/BmiRadio";
import BmiTextfield from "./Bmicomponents/input";

const Bmi = () => {
  const [gender, setgender] = useState("");
  const [height, setheight] = useState("");
  const [weight, setweight] = useState("");
  const [age, setage] = useState("");

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
            <BmiRadio />
          </div>
          <div class="col-6">
            Weight
            <BmiTextfield
              placeholder="Enter Weight KG OR LB"
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
          onClick={() =>
            alert(
              "Gender : " +
                gender +
                "  " +
                "height : " +
                height +
                "  " +
                "Weight : " +
                weight +
                "  " +
                "Age : " +
                age +
                "  "
            )
          }
        >
          Calculate BMS
        </button>
      </div>
    </center>
  );
};

export default Bmi;
