import React, { useEffect, useState } from "react";
import "../Phones/Phones.scss";
import Card from "../Card/Card";
const Laptops = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        "https://dummyjson.com/products/category/laptops"
      ).then((r) => r.json());
      setProduct(data.products);
    })();
  }, []);
  return (
    <div className="parent-phones">
      {product.map((item) => {
        return (
          <div key={item.id}>
            <Card  item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Laptops;
