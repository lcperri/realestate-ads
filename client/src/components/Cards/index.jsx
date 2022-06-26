import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { propertyPagination } from '../../redux/actions'
import Button from '../../styledComponents/Button'
import CardsContainer from '../../styledComponents/CardsContainer'
import Card from '../Card'


const Cards = () => {
  const dispatch = useDispatch();

  const paginatedProperties = useSelector((state) => state.pagination);
  const filter = useSelector((state) => state.filter)

  const [skip, setSkip] = useState(0);
  const [pagesNum, setPagesNum] = useState([]);
  const propertyAmount = paginatedProperties.length;

  const pickPage = (event) => {
    setSkip(event.target.textContent * 2 - 2);
  };

  useEffect(() => {
    if (filter.location !== undefined && filter.max !== undefined) {
      console.log(skip, filter)
      dispatch(propertyPagination(skip, filter));
      let pages = [];
      for (let i = 0; i < Math.ceil(propertyAmount / 2); i++) {
        pages.push(i + 1);
      }
      setPagesNum(pages);
    }
  }, [propertyAmount, skip, filter]);

  return (
    <>
      <CardsContainer>
        {
          paginatedProperties?.map(e => (
            <div key={e.id}>
              <Card  {...e}/>
            </div>
          ))
        }
      </CardsContainer>
      {
        pagesNum ?
        pagesNum.map((num) => (
          <Button key={num}
            onClick={(e) => pickPage(e)} title={`Page ${num}`}>
              {num}
          </Button>
        ))
        : null
      }
    </>
  )
}

export default Cards