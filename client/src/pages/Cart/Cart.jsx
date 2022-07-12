import Filter from "../../components/Filters";
import Cards from "../../components/Cards";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clear } from "../../redux/actions";
import CardsContainer from "../../styledComponents/CardsContainer";
import DivContainer from "../../styledComponents/DivContainer";

export default function Cart(){
  const dispatch = useDispatch();
  const id = localStorage.getItem('id');
  
  useEffect(() => {
    return () => dispatch(clear());
  });

  return(      
    <div >
      <DivContainer home={true} className="home">
        {/* <Loader /> */}
        <CardsContainer>
          <Cards cart={id} />
        </CardsContainer>      
      </DivContainer>
    </div>
  )
}