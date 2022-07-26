import { useQuery } from "@apollo/client";
import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { ALL_CARTS, AUTHOR } from "../../apollo/requests";
import { Item, ItemList } from "../../types/cartItem";
import * as s from "./CartItemStyled";

interface CartItemProps {
  item: string;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { data } = useQuery<ItemList>(ALL_CARTS);
  const {data:authorData} = useQuery(AUTHOR, {
    variables: {
      email: localStorage.getItem('user') 
    },skip: localStorage.getItem('user') === null
  })
  const { removeFromCart } = useShoppingCart();

  if (!data) return <div>no data</div>;
  const cart = data.stores.find((i) => i.id === item);
  if (cart == null || authorData?.authors[0].itemInfo?.find((i: { itemId: string; }) => i.itemId === item).quantity === 0) return null;

  return (
    <s.CardS>
      <img
        src={cart.imgUrl.url}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <p>x{authorData?.authors[0].itemInfo?.find((i: { itemId: string; }) => i.itemId === item).quantity}</p>
      <div>
        <div>${cart.price}</div>
        {cart.name}
      </div>
      <s.DeleteBtn onClick={() => removeFromCart(cart.id)}>X</s.DeleteBtn>
    </s.CardS>
  );
};

export default CartItem;
