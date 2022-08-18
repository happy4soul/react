import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
const year = currentDate.getFullYear();
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Created by BHASKAR
    </h1>
    <p>
      Copyright {year} <a href="a.html">here</a>
    </p>
    <center>
      <div className="row">
        <div className="col col-lg-4 col-md-6 col-sm-12">
          <img
            src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/veg-noodles-vegetable-noodles-recipe.jpg"
            alt=""
          />
        </div>

        <div className="col col-lg-4 col-md-6 col-sm-12">
          <img
            src="https://nithisclickncook.com/wp-content/uploads/2020/01/Chicken-Lasagna-39.jpg"
            alt=""
          />
        </div>

        <div className="col col-lg-4 col-md-6 col-sm-12">
          <img
            src="https://www.indianhealthyrecipes.com/wp-content/uploads/2019/02/chicken-biryani-recipe-500x500.jpg"
            alt=""
          />
        </div>
      </div>
    </center>

    <center>
      <div>
        <img src={img} />
      </div>
    </center>
  </div>,

  document.querySelector("#root")
);
