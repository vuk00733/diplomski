import React from "react";

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <h2>STORE</h2>
      </div>
      <div>
       CART
        {props.countCartItems ? (
          <button className="badge">{props.countCartItems}</button>
        ) : (
          ""
        )}
      </div>
    </header>
  );
}
