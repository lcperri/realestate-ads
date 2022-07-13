import { useEffect } from "react";
import { DivRow } from "../../styledComponents/DivRow";
import { Title } from "../../styledComponents/FiltersStyles";
import "./planes.css";
import Premium from "./Premium";
import Vip from "./Vip";
import capitalize from "../../functions/capitalize";
import Button from "../../styledComponents/Button";
import BackButton from "../../dumb/BackButton";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { deleteLink } from "../../redux/actions";
import { GetUserById } from "./../../redux/actions";
import LoginController from "../../localStorage/login";

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

  useEffect(() => {
    if (link?.length) {
      window.open(link);
      dispatch(deleteLink());
    }
  }, [link]);

  const updateSubscription = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const cancelSubscription = (e) => {
    e.preventDefault();
    if (user?.subscription) {
      dispatch(
        updateSubscription(
          id,
          { reason: "Adiós", status: "cancelled" },
          headers
        )
      );
    }
  };

  return (
    <div className="bodyPlanes">
      <div className="subWrapper">
        <Title fSize="24px" color="#fff">
          VENDE O ALQUILA TU PROPIEDAD EN TIEMPO RECORD
        </Title>
        {range === "free" && (
          <>
            <Title margin="60px 0 0 0">¡Suscribite para publicar!</Title>
            <DivRow alignIt="space-between" justCont="space-between">
              <Premium />
              <Vip />
            </DivRow>
            <h2>Tu subscripción actual es: {capitalize(range)}</h2>
          </>
        )}
        {range === "premium" && (
          <>
            <Title margin="60px 0 0 0">
              ¡Actualiza a VIP y obtén mayores beneficios!
            </Title>
            <DivRow justCont="center">
              <Vip />
            </DivRow>
            <h2>Tu subscripción actual es: {capitalize(range)}</h2>
            <Button
              className="planes"
              margin="20px 0 0 0"
              to="/#"
              value={"cancelled"}
              onClick={(e) => cancelSubscription(e)}
            >
              Cancelar subscripción
            </Button>
          </>
        )}
        {range === "vip" && (
          <>
            <Title margin="60px 0 0 0">
              ¡Tu cuenta está con los máximos beneficios. Continúa disfrutando
              de ella!
            </Title>
            <DivRow justCont="center" padding="70px">
              <BackButton>{"<"}</BackButton>
            </DivRow>
            <h2>Tu subscripción actual es: {capitalize(range)}</h2>
            <Button
              className="planes"
              margin="20px 0 0 0"
              to="/#"
              value={"cancelled"}
              onClick={(e) => cancelSubscription(e)}
            >
              Cambiar a premium
            </Button>
            <Button className="planes" margin="10px 0 0 0" to="/#">
              Cancelar subscripción
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
