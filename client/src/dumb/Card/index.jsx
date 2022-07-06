import React, { useEffect, useState } from 'react'
import StyledText from '../../styledComponents/StyledText'
import StyledCard from '../../styledComponents/StyledCard'
import BathIcon from '../Icons/Bath'
import RoomIcon from '../Icons/Room'
import AreaIcon from '../Icons/Area'
import styles from './styles.module.css'
import { Heart } from '../Icons/Heart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledLinkCard } from '../../styledComponents/StyledLink'
import { DivRow } from '../../styledComponents/DivRow'
import { getFavourites } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


const Card = ({ _id, address, city, area, type, rooms, status, bathrooms, price, operation, pictures }) => {
  const dispatch = useDispatch()
  const userId = localStorage.getItem('id')
  const user = useSelector(state => state.user)
  const [fav, setFav] = useState(false)

  useEffect (() => {
    if (user.favourites?.includes(_id)) {
      console.log('estoy en fav', _id);
      setFav(true)
    } else {
      console.log('ya no estoy en fav', _id);
      setFav(false)
    }
  }, [user])

  const setFavourite = (e) => {
    e.preventDefault()
    console.log('asasdas');

    dispatch(getFavourites(userId, {property: _id}))
  }

  return (
    <>
      <StyledLinkCard to={`/${_id}`}>
        <img src={pictures[0]} />
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
      <button onClick={(e) => setFavourite(e)}>
        <Heart width='28' height='28' fill={fav ? 'red': 'white'} onHover='#E52F50' />
        
      </button>
    </>
  )
}

export default Card