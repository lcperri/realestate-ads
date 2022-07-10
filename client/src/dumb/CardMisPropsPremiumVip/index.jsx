import React from "react";
import styles from './CardMisPropsPV.module.css';
import StyledText from '../../styledComponents/StyledText'
//import DivContainer from '../../styledComponents/'
import BathIcon from '../Icons/Bath'
import RoomIcon from '../Icons/Room'
import AreaIcon from '../Icons/Area'
import Button from '../../styledComponents/Button';
import { StyledLink } from "../../styledComponents/StyledLink";

export default function CardMisPropPremiumVip({id, type, address, price, area, rooms, bathrooms, pictures}){

    return(
        <div className={styles.contenedorMP}>

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
                <p className={styles.visto}>Visto: </p>
                <p>Marcado Favorito: </p>
                <Button className={styles.botonConetar}>
                    <StyledLink to={`/contacto/${id}`}>Ver solicitudes de contacto</StyledLink>
                </Button>
                <Button className={styles.botonDet}>Ver comentarios</Button>      
                <Button className={styles.botonQuitar}>Rentado/Vendido/Reservado</Button>
            </div>
                   
        </div>
     )
}