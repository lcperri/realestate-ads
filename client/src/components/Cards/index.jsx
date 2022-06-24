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
          <Card 
            key={e.id}
            id = {e.id}
            address = {e.address}
            area  = {e.area}
            type = {e.type}
            rooms = {e.rooms}
            status = {e.status}
            city = {e.city}
            bathrooms = {e.bathrooms}
            rentPrice = {e.rentPrice}
            sellPrice = {e.sellPrice}
            pictures = {e.pictures}
          />
        ))
      }
    </CardsContainer>
  )
}

export default Cards