import React from 'react'
import StyledText from '../../styledComponents/StyledText'
import StyledCard from '../../styledComponents/StyledCard'
import BathIcon from '../Icons/Bath'
import RoomIcon from '../Icons/Room'
import AreaIcon from '../Icons/Area'
import styles from './styles.module.css'

const Card = ({address, city, area, type, rooms, status, bathrooms, price, operation, pictures }) => {
  return (
    <StyledCard>
        <img src = {pictures[0]} />
        <div className={styles.priceOperation}>
          <h2>
            $ {price} USD 
          </h2>
          <StyledText className='operationCard'>{operation === 'rent' ? 'En alquiler' : 'En venta'}</StyledText>
        </div>
        <div>
          <StyledText className='typeCard'>{type}</StyledText> 
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
          <StyledText className='statusCard'>{status}</StyledText>
        </blockquote>
    </StyledCard>
  )
}

export default Card