import React from "react";
import Filter from "../Filters";
import Favorito from '../CardFavorito';
import { useSelector } from "react-redux";

export default function Favoritos(){

    const allFav = useSelector(state => state.favoritos);
    console.log("data:", allFav)
    return(      
      <div>
          <div>
            <Filter />
          </div>
          {/* <Loader /> */}
            
              
            {
              allFav.length &&
              allFav.map(p => {
                return(
                  <div key={p.id}>                            
                      <Favorito key={p.id} type={p.type} address={p.address} price={p.price} 
                                area={p.area} rooms={p.rooms} bathrooms={p.bathrooms} pictures={p.pictures}/>
                  </div>
                )                    
              })
            }
      </div>
    )
}