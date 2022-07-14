import StyledCard from "../../styledComponents/StyledCard";
import DivContainer from "../../styledComponents/DivContainer";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getReports } from "../../redux/actions";
import LoginController from "../../localStorage/login";
import CardDenuncia from './../../dumb/CardDenuncia/index';

export default function Reports() {
  const dispatch = useDispatch();
  const flags = useSelector((state) => state.flags);
  const { id } = useParams();
  const headers = LoginController();

  useEffect(() => {
    dispatch(getReports(id, headers));
  }, []);

  return (
    <div>
      { flags && flags.map((report) => {
         return (
            <CardDenuncia
            reason={report.reason}
            />
         )
        })}
    </div>
  );
}
