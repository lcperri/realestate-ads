import React from "react";
import Cards from "../../components/Cards";
import CardsContainer from "../../styledComponents/CardsContainer";
import DivContainer from "../../styledComponents/DivContainer";
import Filter from "../../components/Filters";
import Favorito from '../Favorito';
import { useSelector } from "react-redux";
import StyledLink from '../../styledComponents/StyledLink'

export default function CardsFavoritos(){

    const allFav = useSelector(state => state.favoritos);
    console.log("data:", allFav)
    return(
        <div>
            <div>
              <Filter />
            </div>
            {/* <Loader /> */}
            
              {/* <CardsContainer> */}
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
                
              {/* </CardsContainer> */}
            
      
        </div>
    )
}