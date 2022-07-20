import { useQuery } from "@apollo/client";
import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { ALL_CARTS } from "../apollo/carts";
import { Item } from "../types/cartItem";
import * as s from "./CartItemStyled";
interface CartItemProps {
  item: {
    id: string;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { data } = useQuery<Item>(ALL_CARTS);
  const { removeFromCart } = useShoppingCart();

  if (!data) return <div>no data</div>;

  console.log(data);

  const cart = data.stores.find((i) => i.id === item.id);
  if (cart == null) return null;

  return (
    <s.CardS>
      <img
        src={cart.imgUrl.url}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div>
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
      <s.DeleteBtn onClick={() => removeFromCart(cart.id)}>
        X
      </s.DeleteBtn>
    </s.CardS>
  );
};

export default CartItem;
