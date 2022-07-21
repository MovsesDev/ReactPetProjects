import { useQuery } from "@apollo/client";
import React from "react";
import { Container } from "../components/Container";
import StoreItem from "../components/StoreItem";
import { ALL_CARTS } from "../apollo/carts";
import { ItemList } from "../types/cartItem";
import * as s from './StoreStyled'
const Store = () => {
  const  {loading, error, data} = useQuery<ItemList>(ALL_CARTS)  

  if(error) return <div>Something went wrong</div>
if(loading) return <div>Loading...</div>



  return (
    <s.Main>
      {
    data?.stores.map((item) => {
      return <StoreItem key={item.id} item={item} />
    }
      
      )}
    </s.Main>
  );
};

export default Store;
