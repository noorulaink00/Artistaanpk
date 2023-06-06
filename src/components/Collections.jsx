import React from "react";

const Collections = () => {
  return (
    <>
      <div className="shop-collections items">
        <h1 className="shop">Shop Collections</h1>
        <div className="border1"></div>
        <div className="row-col">
          <div className="col-4">
            <div className="image">
              <img src="images/Collections/notebook 1.jpg" alt="" />
              <button>View All</button>
            </div>
            <h4>Notebooks</h4>
          </div>

          <div className="col-4">
            <div className="image">
              <img src="images/Collections/color.webp" alt="" />
              <button>View All</button>
            </div>
            <h4>Colored Sheets</h4>
          </div>

          <div className="col-4">
            <div className="image">
              <img src="images/Collections/wrapping2.png" />
              <button>View All</button>
            </div>
            <h4>Wrapping Paper</h4>
          </div>

          <div className="col-4">
            <div className="image">
              <img src="images/Collections/threads.jfif" alt="" />
              <button>View All</button>
            </div>
            <h4>Threads</h4>
          </div>

          <div className="col-4">
            <div className="image">
              <img src="images/Collections/stationary.webp" alt="" />
              <button>View All</button>
            </div>
            <h4>Funky Pencils</h4>
          </div>
        </div>

        <div className="row d_flex">
          <button>View All</button>
        </div>
      </div>
    </>
  );
};

export default Collections;
