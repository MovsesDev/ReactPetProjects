import { useQuery } from "@apollo/client";
import React from "react";
import { Container } from "../components/Container";
import StoreItem from "../components/StoreItem";
import { ALL_CARTS } from "../apollo/carts";
import { Item } from "../types/cartItem";
import * as s from './StoreStyled'
const Store = () => {
  const  {loading, error, data} = useQuery<Item>(ALL_CARTS)  

  if(error) return <div>Something went wrong</div>
if(loading) return <div>Loading...</div>



  return (
    <s.Main>
      {
    data?.stores.map((item) => (
        <StoreItem key={item.id} item={item} />
      ))}
    </s.Main>
  );
};

export default Store;
