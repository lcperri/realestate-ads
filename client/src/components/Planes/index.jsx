import { useEffect } from "react";
import { DivRow } from "../../styledComponents/DivRow";
import { Title } from "../../styledComponents/FiltersStyles";
import styles from "./styles.module.css";
import Premium from "./Premium";
import Vip from "./Vip";
import capitalize from "../../functions/capitalize";
import Button from "../../styledComponents/Button";
import BackButton from "../../dumb/BackButton";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { deleteLink, updateSubscription } from "../../redux/actions";
import { GetUserById } from "./../../redux/actions";
import LoginController from "../../localStorage/login";
import { DivColumn } from "./../../styledComponents/DivColumn";

export default function Planes() {
  const id = localStorage.getItem("id");
  const range = localStorage.getItem("range");
  const headers = LoginController();
  const dispatch = useDispatch();
  const link = useSelector((state) => state.link);
  const user = useSelector((state) => state.user);
  
  
  useEffect(() => {
    dispatch(GetUserById(id));
  }, []);

    const updateSubscription = (e) => {
        e.preventDefault();
        // console.log(e.target.value)
    }
    
    useEffect(() => {
        if (link?.length) {
            window.open(link);
            dispatch(deleteLink());
        }
    }, [link]);

  const degradeSubscription = (e) => {
    e.preventDefault();
    dispatch(
        updateSubscription(user?.subscription, {
        reason: "Mikasa Nueva Premium",
      }, headers)
    );
  };

  const cancelSubscription = (e) => {
    e.preventDefault();
    if (user?.subscription) {
      dispatch(
        updateSubscription(
          user?.subscription,
          { reason: "Adiós", status: "cancelled" },
          headers
        )
      );
    }
  };

  return (
    <div className={styles.bodyPlanes}>
      {/* <div className={styles.subWrapper}> */}
      <Title fSize="24px" color="#fff">
        VENDE O ALQUILA TU PROPIEDAD EN TIEMPO RECORD
      </Title>
      {range === "free" && (
        <div>
          <Title margin="60px 0 0 0">¡Suscribite para publicar!</Title>
          <DivRow alignIt="space-between" justCont="center" margin="30px 0 0 0">
            <Premium />
            <Vip />
          </DivRow>
          <DivColumn margin="80px 0 0 0">
            <h2>Tu subscripción actual es: {capitalize(range)}</h2>
          </DivColumn>
        </div>
      )}
      {range === "premium" && (
        <div>
          <Title margin="60px 0 0 0">
            ¡Actualiza a VIP y obtén mayores beneficios!
          </Title>
          <DivRow justCont="center" margin="30px 0 0 0">
            <Vip />
          </DivRow>
          <DivColumn margin="80px 0 0 0">
            <h2>Tu subscripción actual es: {capitalize(range)}</h2>
            <Button
              className="planes"
              margin="20px 0 0 0"
              to="/#"
              onClick={(e) => cancelSubscription(e)}
            >
              Cancelar subscripción
            </Button>
          </DivColumn>
        </div>
      )}
      {range === "vip" && (
        <div>
          <Title margin="60px 0 0 0">
            ¡Tu cuenta está con los máximos beneficios. Continúa disfrutando de
            ella!
          </Title>
          <DivRow justCont="center" padding="70px" margin="30px 0 0 0">
            <BackButton>{"<"}</BackButton>
          </DivRow>
          <DivColumn>
            <h2>Tu subscripción actual es: {capitalize(range)}</h2>
            <Button
              className="planes"
              margin="20px 0 0 0"
              to="/#"
              onClick={(e) => degradeSubscription(e)}
            >
              Cambiar a premium
            </Button>
            <Button
              className="planes"
              margin="10px 0 0 0"
              to="/#"
              onClick={(e) => cancelSubscription(e)}
            >
              Cancelar subscripción
            </Button>
          </DivColumn>
        </div>
      )}
      {/* </div> */}
    </div>
  );
}
