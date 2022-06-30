import React from "react";
import Filter from "../Filters";
import { useSelector } from "react-redux";
import styles from './misPropPV.module.css';
import CardMisPropsPremiumVip from '../CardMisPropsPremiumVip';
import Button from '../../styledComponents/Button';
import DivContainer from "../../styledComponents/DivContainer";

export default function MisPropPremiumVip(){

    const allProps = useSelector(state => state.misPropiedades);
    const handleVip = (e) => {};

    return(      
        <div className={styles.contenedor}>
            <div>
              <Filter />
            </div>
            {/* <Loader /> */}

            {
            <DivContainer className={styles.cont}>
                
              <label className={styles.plan}>Haste VIP y publica SIN LIMITES !!</label>
               
              <div><Button className={styles.contratar} onClick={handleVip}>Contratar</Button></div>
                
                
            </DivContainer>
            }    
            {
                allProps.length &&
                allProps.map(p => {
                  return(
                    <div key={p.id}>                            
                        <CardMisPropsPremiumVip key={p.id} type={p.type} address={p.address} price={p.price} 
                                  area={p.area} rooms={p.rooms} bathrooms={p.bathrooms} pictures={p.pictures}/>
                    </div>
                  )                    
                })
            }
        </div>
      )
  }