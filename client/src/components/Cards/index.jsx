import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProperties } from '../../redux/actions'
import CardsContainer from '../../styledComponents/CardsContainer'
import Card from '../Card'
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
          <div key={e.id}>
            <Card  {...e}/>
          </div>
        ))
      }
    </CardsContainer>
  )
}

export default Cards