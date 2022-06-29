import React from "react";
import CardFavorito from "../CardFavorito";
import CardsContainer from "../../styledComponents/CardsContainer";
import DivContainer from "../../styledComponents/DivContainer";
import Filter from "../Filters";




export default function CardFavoritos(){


    return(
      <div>

      <div>
        <div>
          <Filter />
        </div>
        
        <DivContainer className="home">
          <CardsContainer>
            {/*mapear favoritos */}
            {/* <CardFavorito /> */}
          </CardsContainer>
        </DivContainer>
      </div>
      
      </div>
    )
}