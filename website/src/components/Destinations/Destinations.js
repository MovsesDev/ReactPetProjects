import React from 'react'
import { Container } from '../../common/Container'
import Cards from '../Card/Card'
import { DestinationsS } from './DestinationsStyled'

const Destinations = () => {
  return (
    <Container>
      <DestinationsS>
        <Cards/>
      </DestinationsS>
    </Container>
  )
}

export default Destinations