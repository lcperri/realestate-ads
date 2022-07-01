import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterByOwner, propertyPagination } from '../../redux/actions'
import CardsContainer from '../../styledComponents/CardsContainer'
import Card from '../../dumb/Card'
import { StyledLinkCard } from '../../styledComponents/StyledLink'
import Pagination from '../Pagination'
import CardMisPropsPremiumVip from '../../dumb/CardMisPropsPremiumVip';

const Cards = ({ id }) => {
  const dispatch = useDispatch();

  const properties = useSelector((state) => state.properties);
  const pages = useSelector((state) => state.pages);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    if ((!id) && (filter.location !== undefined && filter.max !== undefined)) {
      dispatch(propertyPagination(filter));
    } else if ((id) && (filter.location !== undefined && filter.max !== undefined)) {
      dispatch(filterByOwner(filter, id));
    }
  }, [filter]);

  return (
    <>
      <CardsContainer>
        {
          !id ?
          properties && properties.slice(pages[1]-1, pages[2]).map(e => (
            <StyledLinkCard to={`/${e._id}`} key={e._id}>
              <Card  {...e}/>
            </StyledLinkCard>
          )) :
          properties && properties.slice(pages[1]-1, pages[2]).map(e => (
            <CardMisPropsPremiumVip key={e.id} type={e.type} address={e.address} price={e.price} 
              area={e.area} rooms={e.rooms} bathrooms={e.bathrooms} pictures={e.pictures[0]}/>
          ))
        }
      </CardsContainer>
      <Pagination></Pagination>
    </>
  )
}

export default Cards