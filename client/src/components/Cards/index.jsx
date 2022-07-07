import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterByFollower, filterByOwner, propertyPagination } from '../../redux/actions'
import CardsContainer from '../../styledComponents/CardsContainer'
import Card from '../../dumb/Card'
import Pagination from '../Pagination'
import CardMisPropsPremiumVip from '../../dumb/CardMisPropsPremiumVip';
import Favorito from '../../dumb/CardFavorito'
import StyledCard from '../../styledComponents/StyledCard'
import LoginController from './../../localStorage/login';

const Cards = ({ id, favourites }) => {
  const dispatch = useDispatch();

  const headers = LoginController();

  const properties = useSelector((state) => state.properties);
  const pages = useSelector((state) => state.pages);
  const filter = useSelector((state) => state.filter);

  useEffect(() => {
    if ((!id && !favourites) && (filter.location !== undefined && filter.max !== undefined)) {
      dispatch(propertyPagination(filter));
    } else if ((id) && (filter.location !== undefined && filter.max !== undefined)) {
      dispatch(filterByOwner(filter, id, headers));
    } else if ((favourites) && (filter.location !== undefined && filter.max !== undefined)) {
      dispatch(filterByFollower(filter, favourites, headers));
    }
  }, [filter]);

  return (
    <>
      <CardsContainer>
        {
          id ?
          properties && properties.slice(pages[1]-1, pages[2]).map(e => (
            <CardMisPropsPremiumVip key={e.id} type={e.type} address={e.address} price={e.price} 
              area={e.area} rooms={e.rooms} bathrooms={e.bathrooms} pictures={e.pictures[0]}/>
          )) : favourites ?       
          properties && properties.slice(pages[1]-1, pages[2]).map(e => (                
            <Favorito key={e.id} id={e._id} type={e.type} address={e.address} price={e.price} 
            area={e.area} rooms={e.rooms} bathrooms={e.bathrooms} pictures={e.pictures[0]}/>
            ))  :
          properties && properties.slice(pages[1]-1, pages[2]).map(e => (
            <StyledCard key={e._id}>
              <Card  {...e}/>
            </StyledCard>
          ))
        }
      </CardsContainer>
      <Pagination></Pagination>
    </>
  )
}

export default Cards