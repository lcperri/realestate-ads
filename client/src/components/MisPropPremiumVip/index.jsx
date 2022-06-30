import React from "react";
import Filter from "../Filters";
import { useSelector } from "react-redux";
import styles from './misPropPV.module.css';
import CardMisPropsPremiumVip from '../CardMisPropsPremiumVip';

export default function MisPropPremiumVip(){

    const allProps = useSelector(state => state.misPropiedades);
    

    return(      
        <div className={styles.contenedor}>
            <div>
              <Filter />
            </div>
            {/* <Loader /> */}

            {
              <div className={styles.cartelPlan}>
                <p className={styles.plan}>Haste PREMIUM y publica SIN LIMITES !!</p>
              </div>
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