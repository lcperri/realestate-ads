import React from "react";
import Filter from "../../components/Filters";
import { useSelector } from "react-redux";
import styles from './misPropPV.module.css';
import Button from '../../styledComponents/Button';
import DivContainer from "../../styledComponents/DivContainer";
import Cards from "../../components/Cards";

export default function MisPropPremiumVip(){
  const id = localStorage.getItem('id');

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
              
            <label className={styles.plan}>Hacete VIP y publica SIN LIMITES !!</label>
              
            <div><Button className={styles.contratar} onClick={handleVip}>Contratar</Button></div>
              
          </DivContainer>
          }
          <Cards id={id} />
      </div>
    )
  }