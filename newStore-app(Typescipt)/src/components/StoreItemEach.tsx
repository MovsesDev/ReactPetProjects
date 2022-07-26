import React, { Dispatch, SetStateAction } from "react";
import { Item } from "../types/cartItem";
import Loading from "./common/Loading";
import * as s from "./StoreItem/StoreItemStyled";

interface StoreItemEachProps {
  item: Item;
  quantity: number;
  increaseCartQuantity:(id: string) => void;
  removeFromCart: (id: string) => void;
  decreaseCartQuantity: (id: string) => void;
  loading: boolean
}

const StoreItemEach: React.FC<StoreItemEachProps> = ({
  item,
  quantity,
  increaseCartQuantity,
  decreaseCartQuantity,
  removeFromCart,
  loading
}) => {
  return (
    <s.Card>
      <Loading loading={loading} />
      <s.Image src={item.imgUrl.url} />
      <s.ImageTop>
        <s.ImageName>{item.name}</s.ImageName>
        <s.ImagePrice>${item.price}</s.ImagePrice>
      </s.ImageTop>
      {quantity ? (
        <s.ImageMid>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <s.Button onClick={() => decreaseCartQuantity(item.id)}>-</s.Button>
            <s.Text>{quantity} in cart</s.Text>
            <s.Button onClick={() => increaseCartQuantity(item.id)}>+</s.Button>
          </div>
          <div style={{ padding: "10px" }}>
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

export default StoreItemEach;
