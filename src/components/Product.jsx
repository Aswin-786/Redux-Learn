import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";

const Product = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const response = await data.json();
    setProducts(response);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => {
    return (
      <div className="col-md-3 " style={{ marginBottom: "10px" }}>
        <Card key={product.id} className="h-100 p-2">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            ></Card.Img>
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>INR: {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ background: "white" }}>
            <Button variant="primary" onClick={() => addToCart(product)}>
              Add to Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <>
      <h1 className="text-center py-3">Products</h1>
      <div className="row px-2">{cards}</div>
    </>
  );
};

export default Product;
