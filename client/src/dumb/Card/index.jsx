import React from 'react'
import StyledText from '../../styledComponents/StyledText'
import StyledCard from '../../styledComponents/StyledCard'
import BathIcon from '../Icons/Bath'
import RoomIcon from '../Icons/Room'
import AreaIcon from '../Icons/Area'
import styles from './styles.module.css'
import Heart from '../Icons/Heart'

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
        <div className={styles.footer}>
          <blockquote>
            <StyledText className='statusCard'>{status === 'available' ? 'Disponible' : 'Reservado'}</StyledText>
            {/* validar más tipos de status */}
          </blockquote>
          <Heart width='30' height='30' fill='red' onClick={() => console.log('me añadiste a favoritos')} />
        </div>
    </StyledCard>
  )
}

export default Card