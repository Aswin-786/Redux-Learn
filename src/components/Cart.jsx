import React from "react";
import { useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const deleteToCart = (product) => {
    dispatch(remove(product));
  };

  const cards = cartItems.map((product) => {
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
            <Button variant="primary" onClick={() => deleteToCart(product.id)}>
              Delete item
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });
  return <div className="row px-2">{cards}</div>;
};

export default Cart;
