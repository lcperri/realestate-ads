import styles from "./styles.modules.css";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getReports } from "../../redux/actions";
import LoginController from "../../localStorage/login";
import CardDenuncia from './../../dumb/CardDenuncia/index';
import { DivColumn } from "../../styledComponents/DivColumn";
import CardsContainer from "../../styledComponents/CardsContainer";
import { deleteUser } from './../../redux/actions';
import Button from './../../styledComponents/Button';

export default function Reports() {
  const dispatch = useDispatch();
  const flags = useSelector((state) => state.flags);
  const { id } = useParams();
  const headers = LoginController();

  useEffect(() => {
    dispatch(getReports(id, headers));
  }, []);

  const handleElim = (e) => {
    dispatch(deleteUser(id, headers));
  };

  return (
    <DivColumn >
      <CardsContainer margin='140px auto 40px auto'>
      { flags && flags.map((report) => {
         return (
            <CardDenuncia
            reason={report.reason}
            />
         )
        })}
    </CardsContainer>
    <Button onClick={(e) => {handleElim(e)}}>Eliminar usuario</Button>
    </DivColumn>
  );
}
