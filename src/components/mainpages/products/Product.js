import React, { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
import ProductList from "../utils/ProductList/ProductList";


const Product = () => {
  const state = useContext(GlobalState);
  console.log(state)
  const [products] = state.productAPI.products;
  // const [isAdmin] = state.userAPI.isAdmin;
  console.log(products)
  return (
    <div className="">
      {products.map((product) => {
        return (
          <ProductList key={product._id} product={product} />
        );
      })}
    </div>
  );
};

export default Product;
