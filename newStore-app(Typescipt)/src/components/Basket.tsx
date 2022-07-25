import React, { SetStateAction } from "react";
import * as s from "./BasketStyled";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { useQuery } from "@apollo/client";
import { ItemList } from "../types/cartItem";
import { ALL_CARTS, AUTHOR } from "../apollo/requests";

interface BasketProps {
  active: Boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>;
}

const Basket: React.FC<BasketProps> = ({ active, setActive }) => {
  const { error, loading, data } = useQuery<ItemList>(ALL_CARTS);
  const cartItems = data?.stores
  const {
    error: authorError,
    loading: authorLoading,
    data: authorData,
  } = useQuery(AUTHOR,{variables: {
    email: localStorage.getItem('user')
  }});

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
          {cartItems?.map((item) => {  
            return authorData?.authors[0].itemInfo.filter((e : {itemId: string}) => e.itemId === item.id) && <CartItem key={item.id} item={item} />;
          })}
          <s.CloseBtn onClick={() => setActive(false)} active={active}>
            X
          </s.CloseBtn>
        </s.Modal>
      </s.BackGround>
    </s.BasketS>
  );
};

export default Basket;
