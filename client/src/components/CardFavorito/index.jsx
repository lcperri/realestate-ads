import React from "react";
import styles from './CardFav.module.css';
import StyledText from '../../styledComponents/StyledText'
//import DivContainer from '../../styledComponents/'
import BathIcon from '../Icons/Bath'
import RoomIcon from '../Icons/Room'
import AreaIcon from '../Icons/Area'
import Button from '../../styledComponents/Button';
import {StyledLink} from '../../styledComponents/StyledLink'


export default function CardFavorito({_id, type, address, price, area, rooms, bathrooms, pictures}){


    const handleConectar = (e) => {};
    const handleElim = (e) => {};

    return(
        <div className={styles.contenedorFav}>

            <div className={styles.divFotos}>
                
                <img src={pictures} alt={"not found"} className={styles.foto}/>
                               
            </div>

            <div className={styles.divCaracteristicas}>
                <div>
                   <h2>
                      $ {price} USD 
                   </h2>   
                </div>                   
        
                <div className={styles.typo}>
                   <StyledText className='typeCard'>{type}</StyledText> 
                </div>
                
                <div className={styles.direcc}>
                   <h4>{address}</h4> 
                </div>
                
                <div className={styles.areaRoomBath}>
                  <h5>
                    <AreaIcon/> {area}m2   
                    <RoomIcon/> {rooms} hab
                   <BathIcon/> {bathrooms} baños
                  </h5>
                </div>
            </div>             
            
            <div className={styles.divBotones}>
                <Button className={styles.botonConetar} onClick={handleConectar}>Contactar</Button> 

                <StyledLink to={`/${_id}`}> {/*62b74f620a21495c42dde489*/}
                    <Button className={styles.botonDet}>Ver detalle</Button>      
                </StyledLink>     
                
                <Button className={styles.botonQuitar} onClick={handleElim}>Quitar de favoritos</Button>
            </div>
                   
        </div>
     )
}