import Filter from "../../components/Filters";
import Cards from "../../components/Cards";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clear } from "../../redux/actions";
import CardsContainer from "../../styledComponents/CardsContainer";
import DivContainer from "../../styledComponents/DivContainer";

export default function Favoritos(){

  const dispatch = useDispatch();
  const id = localStorage.getItem('id');
  
  useEffect(() => {
    return () => dispatch(clear());
  });

  return (      
    <div >
      <div>
        <Filter />
      </div>
      <DivContainer className="home">
          <Cards favourites={id} />
      </DivContainer>
    </div>
  )
}