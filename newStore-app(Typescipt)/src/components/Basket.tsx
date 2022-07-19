import React, { SetStateAction } from "react";
import * as s from "./BasketStyled";
import storeItems from "../data/store.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";

interface BasketProps {
  active: Boolean;
  setActive: React.Dispatch<SetStateAction<boolean>>;
}

const Basket: React.FC<BasketProps> = ({ active, setActive }) => {
  const { cartItems } = useShoppingCart();

const handleClick = (e:React.MouseEvent<HTMLDivElement>) => {
  setActive(false)
}

  return (
    <s.BasketS>
      <s.BackGround active={active} onClick={handleClick}>
        <s.Modal active={active} onClick={(e:React.MouseEvent<HTMLDivElement>) => {e.stopPropagation()}}>
      <h1 style={{padding: '20px', fontSize:'34px'}}>Cart</h1>
          {cartItems.map(item => (
            <CartItem key={item.id} item={item}/>
          ))}
          <p style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}}>Total : ${cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)}</p>
        <s.CloseBtn onClick={() => setActive(false)} active={active}>
          X
        </s.CloseBtn>
        </s.Modal>
      </s.BackGround>
    </s.BasketS>
  );
};

export default Basket;
