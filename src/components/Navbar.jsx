import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart);

  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        <div>
          <Link to={"/"}>Products</Link>
        </div>

        <div>
          <Link to={"/cart"}>cart {cartItems.length}</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
