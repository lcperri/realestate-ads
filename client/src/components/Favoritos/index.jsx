import React from "react";
import Filter from "../Filters";
import Favorito from '../../dumb/CardFavorito';
import { useSelector } from "react-redux";

export default function Favoritos(){

    const allFav = useSelector(state => state.favoritos);
    console.log("data:", allFav);
    console.log("data:", allFav[0]._id);
    return(      
      <div>
          <div>
            <Filter />
          </div>
          {/* <Loader /> */}
            
              
            {
              allFav[0] &&
              allFav.map(p => {
                return(
                  <div key={p._id}>                            
                      <Favorito _id={p._id} type={p.type} address={p.address} price={p.price} 
                                area={p.area} rooms={p.rooms} bathrooms={p.bathrooms} pictures={p.pictures}/>
                  </div>
                )                    
              })
            }
      </div>
    )
}