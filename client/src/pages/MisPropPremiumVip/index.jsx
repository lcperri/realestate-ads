import { useEffect } from "react";
import Filter from "../../components/Filters";
import styles from './misPropPV.module.css';
import Button from '../../styledComponents/Button';
import DivContainer from "../../styledComponents/DivContainer";
import Cards from "../../components/Cards";
import { clear } from "../../redux/actions";
import { useDispatch } from 'react-redux';

export default function MisPropPremiumVip(){
  const dispatch = useDispatch();
  const id = localStorage.getItem('id');

  useEffect(() => {
    return () => dispatch(clear());
  });

  const handleVip = (e) => {};

  return(      
      <div className={styles.contenedor}>
          <div>
            <Filter />
          </div>
          {/* <Loader /> */}

            {
            <DivContainer className={styles.contPlan}>
                
              <label className={styles.plan}>Hacete VIP y publica SIN LIMITES !!</label>
               
              <div><Button className={styles.contratar} onClick={handleVip}>Contratar</Button></div>
                
            </DivContainer>
            }
            <Cards id={id} />
        </div>
      )
  }