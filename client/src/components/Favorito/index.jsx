import React from "react";
import styles from './styles.module.css';
import StyledText from '../../styledComponents/StyledText'
//import DivContainer from '../../styledComponents/'
import BathIcon from '../Icons/Bath'
import RoomIcon from '../Icons/Room'
import AreaIcon from '../Icons/Area'
import Button from '../../styledComponents/Button';


export default function Favorito({type, address, price, area, rooms, bathrooms, pictures}){

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
                <Button className={styles.botonConetar}>Contactar</Button>      
                <Button className={styles.botonDet}>Ver detalle</Button>      
                <Button className={styles.botonQuitar}>Quitar de favoritos</Button>
            </div>
                   
        </div>
     )
}