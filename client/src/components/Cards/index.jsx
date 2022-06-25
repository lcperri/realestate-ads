import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardsContainer from '../../styledComponents/CardsContainer'
import Card from '../Card'
import propertiesList from '../dataTemp'


const Cards = () => {
  const dispatch = useDispatch()

  return (

    <CardsContainer>
      {
        propertiesList.map(e => (
          <Card {...e}/>
        ))
      }
    </CardsContainer>
  )
}

export default Cards