import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Fragrances = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        "https://dummyjson.com/products/category/fragrances"
      ).then((r) => r.json());
      setProduct(data.products);
    })();
  }, []);

  return (
    <div className="container mt-3 p-4">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {product.map((item) => {
          return (
            <div key={item.id}>
              <Card  item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fragrances;