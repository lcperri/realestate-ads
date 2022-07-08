import React, { useEffect, useState } from 'react'
import StyledText from '../../styledComponents/StyledText'
import BathIcon from '../Icons/Bath'
import RoomIcon from '../Icons/Room'
import AreaIcon from '../Icons/Area'
import { StyledLinkCard } from '../../styledComponents/StyledLink'
import { DivRow } from '../../styledComponents/DivRow'
import { useDispatch, useSelector } from 'react-redux'
import house from '../../assets/house.png'
import apartment from '../../assets/apartment.png'
import SetToFavortie from '../../components/SetToFavorite'

const Card = ({ _id, user, address, city, area, type, rooms, status, bathrooms, price, operation, pictures }) => {
  
  return (
    <>
      <StyledLinkCard to={`/${_id}`}>
        <img src={pictures[0] || (type.toLowerCase().includes('casa') ? house : apartment) } />
        <DivRow justCont='space-between'>
          <DivRow>
            <h2>
              $ {price} USD
            </h2>
            <StyledText className='operationCard'>{operation === 'rent' ? 'En alquiler' : 'En venta'}</StyledText>
          </DivRow>
        </DivRow>
        <DivRow>
          <StyledText className='typeCard'>{type}</StyledText>
        </DivRow>
        <div>
          <h4>{address}</h4>
        </div>
        <div>
          <h3>{city}</h3>
        </div>
        <DivRow alignIt='baseline'>
          <aside>
            <h5><AreaIcon /> {area}m2</h5>
          </aside>
          <aside>
            <h5>
              <RoomIcon /> {rooms} hab
            </h5>
          </aside>
          <aside>
            <h5>
              <BathIcon /> {bathrooms} baños
            </h5>
          </aside>
        </DivRow>
      </StyledLinkCard>
      <blockquote>
        <StyledText className='statusCard'>{status === 'available' ? 'Disponible' : 'Reservado'}</StyledText>
      </blockquote>
      { user._id && <SetToFavortie idProperty={_id} user={user}/> }
    </>
  )
}

export default Card