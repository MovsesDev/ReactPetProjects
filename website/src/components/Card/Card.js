import React from "react";
import { CardS, Image, Text } from "./CardStyled";
import card1 from "../../assets/images/img-1.jpg";
import card2 from "../../assets/images/img-2.jpg";
import card3 from "../../assets/images/img-3.jpg";
import card4 from "../../assets/images/img-4.jpg";
import { Container } from "../../common/Container";
const Cards = () => {
  return (
    <>
      <CardS>
        <Image src={card1} />
        <Text>Explore hidden waterfall deep inside the Amazon Jungle </Text>
      </CardS>
      <CardS>
        <Image src={card2} />
        <Text>Explore hidden waterfall deep inside the Amazon Jungle </Text>
      </CardS>
      <CardS>
        <Image src={card3} />
        <Text>Explore hidden waterfall deep inside the Amazon Jungle </Text>
      </CardS>
      <CardS>
        <Image src={card4} />
        <Text>Explore hidden waterfall deep inside the Amazon Jungle </Text>
      </CardS>
    </>
  );
};

export default Cards;
