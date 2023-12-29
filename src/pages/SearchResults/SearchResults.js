import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Card from "../Card/Card";
import NotFound from "../NotFound/NotFound";

const SearchResults = () => {
  const location = useLocation();
  const searchItem = location.state;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch(`https://dummyjson.com/products`).then((r) =>
        r.json()
      );
      setProduct(data.products);
    })();
  }, []);

  const searchValue = product.filter((item) =>
    item.title.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
  );

  return (
    <div className="container mt-3 p-4">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
        {
          searchValue.length === 0 ? <NotFound/>:
            searchValue.map((item)=>{
              return(
                <div key={item.id}>
                <Card item={item} />
              </div>
              )
            })   
        }
      </div>
    </div>
  );
};

export default SearchResults;
