import React from 'react'
import Button from '../../styledComponents/Button'
import StyledCard from '../../styledComponents/StyledCard'
import BathIcon from '../Icons/Bath'
import RoomIcon from '../Icons/Room'
import AreaIcon from '../Icons/Area'
import StyledText from '../../styledComponents/StyledText'

const Card = ({id, address, area, type, rooms, status, bathrooms, rentPrice, sellPrice, pictures }) => {
  return (
    <StyledCard>
      <img src = {pictures} />
      <div>
        <h2>
          $ {rentPrice > 0 ? rentPrice : sellPrice} 
        </h2>
      </div>
      <div>
        <StyledText>{type}</StyledText> 
      </div>
      <div>
        {address}
      </div>
      <div>
        <h4>
          <AreaIcon/> {area}m2   
          <RoomIcon/> {rooms} hab
          <BathIcon/> {bathrooms} baños
        </h4>
      </div>
      <blockquote>
        <Button className='type'>{status}</Button>
      </blockquote>
    </StyledCard>
  )
}

export default Card