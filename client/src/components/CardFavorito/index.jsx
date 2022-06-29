import React from "react";
import StyledText from '../../styledComponents/StyledText'

import BathIcon from '../Icons/Bath'
import RoomIcon from '../Icons/Room'
import AreaIcon from '../Icons/Area'
//import styles from './styles.module.css'

export default function CardFavoritos({type, address, price, area, rooms, bathrooms, pictures}){


    return(
        <div>

            <img src = {pictures[0]} />
            
            <div>
               <StyledText className='typeCard'>{type}</StyledText> 
            </div>
            <div>
                <h4>{price}</h4>
            </div>
            <div>
               <h4>{address}</h4> 
            </div>
            
            <div>
               <h5>
                  <AreaIcon/> {area}m2   
                  <RoomIcon/> {rooms} hab
                  <BathIcon/> {bathrooms} baños
               </h5>
            </div>

            <div>
                <button>Contactar</button>
            </div>
            <div>
                <button>Ver detalles</button>
            </div>
            <div>
                <button>Quitar de favoritos</button>
            </div>

        </div>
    )
}