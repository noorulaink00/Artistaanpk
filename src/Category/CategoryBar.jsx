import React from "react";
import "./CategoryBar.css";
import { CategoryDetails } from "../data/product";
import { Stationarysub } from "../data/pages.js";
import { useState } from "react";
const CategoryBar = (props) => {
  const [Details, setDetails] = useState(CategoryDetails);
  const [subcategory, setsubCategory] = useState(Stationarysub);
  const pagename = props.title;
  const filter = (type) => {
    setsubCategory(CategoryDetails.filter((product) => product.type === type));
  };
  return (
    <div>
      <div class="category">
        {Details.map((details, i) => (
          <div className="cat-desc">
            <span>{pagename}</span>
            <p> {Details.pagename}</p>
          </div>
        ))}
        <div class="cat-rounds">
          {subcategory.map((subcategory, i) => (
            <div class="cat-round-col">
              <img src={subcategory.image} alt="" />
              <ul>
                <li>{subcategory.title}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;
