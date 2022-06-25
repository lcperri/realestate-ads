import React from 'react'
import Button from '../../styledComponents/Button'
import StyledCard from '../../styledComponents/StyledCard'
import BathIcon from '../Icons/Bath'
import RoomIcon from '../Icons/Room'
import AreaIcon from '../Icons/Area'
import StyledText from '../../styledComponents/StyledText'

const Card = ({id, address, city, area, type, rooms, status, bathrooms, rentPrice, sellPrice, pictures }) => {
  return (
    <StyledCard>
      <img src = {pictures[0]} />
      <div>
        <h2>
          $ {rentPrice > 0 ? rentPrice : sellPrice} 
        </h2>
      </div>
      <div>
        <StyledText>{type}</StyledText> 
      </div>
      <div>
        <h4>{address}</h4> 
      </div>
      <div>
        <h3>{city}</h3>
      </div>
      <div>
        <h5>
          <AreaIcon/> {area}m2   
          <RoomIcon/> {rooms} hab
          <BathIcon/> {bathrooms} baños
        </h5>
      </div>
      <blockquote>
        <Button className='type'>{status}</Button>
      </blockquote>
    </StyledCard>
  )
}

export default Card