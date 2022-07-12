import { useEffect } from "react";
import DivContainer from "../../styledComponents/DivContainer";
import Title from "../../styledComponents/Title";
import features from "../../assets/features.png";
import { DivRow } from "../../styledComponents/DivRow";
import Button from "../../styledComponents/Button";
import { useDispatch } from "react-redux/es/exports";
import { getUserById, subscription } from "../../redux/actions";
import { useSelector } from "react-redux/es/exports";
import LoginController from "../../localStorage/login";

const Vip = () => {
  const id = localStorage.getItem("id");
  const headers = LoginController();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserById(id));
  }, []);

  const requestVipSubscription = (e) => {
    e.preventDefault();
    if (user?.email) {
      dispatch(
        subscription(
          {
            email: "test_user_9451359@testuser.com",
            reason: "Mikasa Nueva Vip",
          },
          headers
        )
      );
    }
  };

  return (
    <DivContainer
      padding="20px 40px 20px 40px"
      margin="40px"
      className="plansCard"
    >
      <DivRow justCont="center">
        <Title color="#FF416C">VIP </Title>
      </DivRow>
      <DivRow gap="16px">
        <img src={features} />
        <p className="descripcion-plan">ARS 20.000 al mes.</p>
      </DivRow>
      <DivRow gap="16px">
        <img src={features} />
        <p className="descripcion-plan">Publicaciones mensuales ilimitadas.</p>
      </DivRow>
      <DivRow gap="16px">
        <img src={features} />
        <p className="descripcion-plan">Mayor visibilidad.</p>
      </DivRow>
      <DivRow gap="16px">
        <img src={features} />
        <p className="descripcion-plan">Cancela cuando quieras.</p>
      </DivRow>
      <Button margin="20px 0 0 0" onClick={requestVipSubscription}>
        <div>¡Lo quiero!</div>
      </Button>
    </DivContainer>
  );
};

export default Vip;
