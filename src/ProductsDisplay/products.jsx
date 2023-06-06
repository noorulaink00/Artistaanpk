import React, { useEffect, useState } from "react";
import BreadCrumb from "../CommonComponents/BreadCrumb";
import { db } from "../Firebase/firebase";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await db.collection("Products").get();
      setProducts(data.docs.map((doc) => doc.data()));
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        hello from products
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.Name}</h2>
            <p>{product.VendorName}</p>
            <img src={product.Price} alt={product.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
