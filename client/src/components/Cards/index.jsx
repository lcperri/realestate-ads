import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProperties } from '../../redux/actions'
import CardsContainer from '../../styledComponents/CardsContainer'
import Card from '../Card'
import StyledLink from '../../styledComponents/StyledLink'
// import propertiesList from '../dataTemp'

const Cards = () => {
  const dispatch = useDispatch()
  const propertiesList = useSelector(state => state.properties)

  useEffect(() => {
    dispatch(getAllProperties())
  }, [getAllProperties])

  return (

    <CardsContainer>
      {
        propertiesList?.map(e => (
          <StyledLink to={`/${e._id}`} key={e._id}>
            <Card  {...e}/>
          </StyledLink>
        ))
      }
    </CardsContainer>
  )
}

export default Cards