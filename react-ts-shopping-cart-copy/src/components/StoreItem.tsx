import React, { useState } from 'react'
import * as s from './StoreItemStyled'

interface StoreItemProps {
    item: {
        id: number,
        name: string,
        price: number,
        imgUrl: string
    }
}

const StoreItem: React.FC<StoreItemProps> = ({item})  => {
const [count, setCount] = useState<number>(0)    
  return (
    <s.Card>
        <s.Image src={item.imgUrl} />
        <s.ImageTop>
            <s.ImageName>{item.name}</s.ImageName>
            <s.ImagePrice>{item.price}</s.ImagePrice>
        </s.ImageTop>
        <s.ImageMid>
            <s.Button>-</s.Button>
            <s.Text>{count} in cart</s.Text>
            <s.Button>+</s.Button>
        </s.ImageMid>
        <s.ImageBottom>
            <s.AddButton>+ Add to Cart</s.AddButton>
        </s.ImageBottom>
    </s.Card>
  )
}

export default StoreItem