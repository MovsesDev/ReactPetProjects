import React, { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Item } from "../types/cartItem";
import * as s from "./StoreItemStyled";

interface StoreItemProps {
  item : Item
}

const StoreItem: React.FC<StoreItemProps> = ({item}) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(item.id);
  return (
    <s.Card>
      <s.Image src={item.imgUrl.url} />
      <s.ImageTop>
        <s.ImageName>{item.name}</s.ImageName>
        <s.ImagePrice>${item.price}</s.ImagePrice>
      </s.ImageTop>
      {quantity !== 0 ? (
        <s.ImageMid>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <s.Button onClick={() => decreaseCartQuantity(item.id)}>-</s.Button>
          <s.Text>{quantity} in cart</s.Text>
          <s.Button onClick={() => increaseCartQuantity(item.id)}>+</s.Button>
            </div>
          <div style={{padding: '10px'}}>

          <s.RemoveButton onClick={() => removeFromCart(item.id)}>
            Remove Cart
          </s.RemoveButton>
          </div>
        </s.ImageMid>
      ) : (
        <s.ImageBottom>
          <s.AddButton onClick={() => increaseCartQuantity(item.id)}>
            + Add to Cart
          </s.AddButton>
        </s.ImageBottom>
      )}
    </s.Card>
  );
};

export default StoreItem;
