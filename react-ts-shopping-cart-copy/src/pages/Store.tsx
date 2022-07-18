import React from "react";
import { Container } from "../components/Container";
import StoreItem from "../components/StoreItem";
import storeItems from "../data/store.json";
import * as s from './StoreStyled'
const Store = () => {
  return (
    <s.Main>
      {storeItems.map((item) => (
        <StoreItem key={item.id} item={item} />
      ))}
    </s.Main>
  );
};

export default Store;
