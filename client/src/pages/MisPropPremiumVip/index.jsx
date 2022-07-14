import { useEffect } from "react";
import Filter from "../../components/Filters";
import styles from './misPropPV.module.css';
import Button from '../../styledComponents/Button';
import DivContainer from "../../styledComponents/DivContainer";
import Cards from "../../components/Cards";
import { clear, GetUserById, onlyCart } from "../../redux/actions";
import { useDispatch } from 'react-redux';
import Shopping from '../../dumb/Icons/Shopping'
import LoginController from "../../localStorage/login";
import { StyledLink } from './../../styledComponents/StyledLink';
import { useNavigate } from "react-router-dom";

export default function MisPropPremiumVip(){
  const dispatch = useDispatch();
  const id = localStorage.getItem('id');
  const range = localStorage.getItem('range');
  const headers = LoginController();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetUserById(id));
    dispatch(onlyCart(id, headers));
    return () => dispatch(clear());
  }, []);

  const toPlanes = (e) => {
    e.preventDefault();
    navigate('/planes');
  }

  return(      
      <div className={styles.contenedor}>
          <div>
            <Filter />
          </div>
          {/* <Loader /> */}
              { range === "premium" &&
              <DivContainer className={styles.contPlan}>
                <label className={styles.plan}>Hacete VIP y publica SIN LIMITES !!</label>
                <div><Button onClick={(e) => toPlanes(e)} className={styles.contratar}  >Contratar</Button></div>
              </DivContainer>
              }
            <Cards id={id} />
        </div>
      )
  }