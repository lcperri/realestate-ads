import React from "react";
import Filter from "../Filters";
import Favorito from '../../dumb/CardFavorito';
import { useSelector } from "react-redux";
import Cards from "../Cards";

export default function Favoritos(){
  const id = localStorage.getItem('id');
  
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