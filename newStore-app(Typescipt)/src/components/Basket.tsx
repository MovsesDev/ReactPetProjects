import React, { SetStateAction } from "react";
import * as s from "./BasketStyled";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { useQuery } from "@apollo/client";
import { ItemList } from "../types/cartItem";
import { ALL_CARTS } from "../apollo/carts";

interface BasketProps {
  active: Boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>;
}

const Basket: React.FC<BasketProps> = ({ active, setActive }) => {
  const { cartItems } = useShoppingCart();
  const { error, loading, data } = useQuery<ItemList>(ALL_CARTS);
  if (error) return <div>Error</div>;
  if (!data) return <div>no data</div>;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setActive(false);
  };

  return (
    <s.BasketS>
      <s.BackGround active={active} onClick={handleClick}>
        <s.Modal
          active={active}
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
          }}
        >
          <h1 style={{ padding: "20px", fontSize: "34px" }}>Cart</h1>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            Total : $
            {cartItems.reduce((total, cartItem) => {
              const item = data.stores.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)}
          </p>
          <s.CloseBtn onClick={() => setActive(false)} active={active}>
            X
          </s.CloseBtn>
        </s.Modal>
      </s.BackGround>
    </s.BasketS>
  );
};

export default Basket;
