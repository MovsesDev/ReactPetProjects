import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/store.json";
import * as s from "./CartItemStyled";
interface CartItemProps {
  item: {
    id: number;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const {removeFromCart} = useShoppingCart()
  const cart = storeItems.find((i) => i.id === item.id);
  if (cart == null) return null;

  return (
    <s.CardS>
      <img
        src={cart.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div >
        <div></div>
        {cart.name}{" "}
        {item.quantity > 1 && (
          <span style={{ fontSize: ".65rem" }}>
            x{item.quantity}
            <div>${cart.price}</div>
          </span>
        )}
      </div>
      <div> ${cart.price * item.quantity}</div>
      <s.DeleteBtn onClick={() => removeFromCart(cart.id)}>X</s.DeleteBtn>
    </s.CardS>
  );
};

export default CartItem;
