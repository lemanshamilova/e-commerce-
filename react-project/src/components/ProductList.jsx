import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";
import Cart from "./Cart";




const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  console.log(products);

  return (
    <div
      style={{
        display: "flex",
        justifyContent:"center",
        alignItems:'center',
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "50px",
      }}
    >
      {products.map((product) => {
        return   <Cart key={product.id} products={product} />
          
        
          
        
      })}
    </div>
  );
};

export default ProductList;
