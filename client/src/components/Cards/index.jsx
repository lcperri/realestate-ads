import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { propertyPagination } from '../../redux/actions'
import Button from '../../styledComponents/Button'
import CardsContainer from '../../styledComponents/CardsContainer'
import Card from '../Card'
import StyledLink from '../../styledComponents/StyledLink'
import Pagination from '../Pagination'

const Cards = () => {
  const dispatch = useDispatch();

  const properties = useSelector((state) => state.properties);
  const pages = useSelector((state) => state.pages);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    if (filter.location !== undefined && filter.max !== undefined) {
      dispatch(propertyPagination(filter));
    }
  }, [filter]);

  return (
    <>
      <CardsContainer>
        {
          properties && properties.slice(pages[1]-1, pages[2]).map(e => (
            <StyledLink to={`/${e._id}`} key={e._id}>
              <Card  {...e}/>
            </StyledLink>
          ))
        }
      </CardsContainer>
      <Pagination></Pagination>
    </>
  )
}

export default Cards