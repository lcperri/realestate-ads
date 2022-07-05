import Filter from "../../components/Filters";
import Cards from "../../components/Cards";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clear } from "../../redux/actions";

export default function Favoritos(){
  const dispatch = useDispatch();
  const id = localStorage.getItem('id');

  useEffect(() => {
    return () => dispatch(clear());
  });

  return(      
    <div>
      <div>
        <Filter />
      </div>
      {/* <Loader /> */}
      <Cards favourites={id} />
    </div>
  )
}