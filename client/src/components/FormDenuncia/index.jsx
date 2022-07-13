
import StyledCard from '../../styledComponents/StyledCard'
import styles from './styles.module.css'
import DivContainer from '../../styledComponents/DivContainer';
import Button from "../../styledComponents/Button";
import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import LoginController from '../../localStorage/login'; 
import { addDenuncia } from '../../redux/actions';
import { Label, Select } from '../../styledComponents/StyledFormElements';

export default function FormDenuncia (){

    const [reason, setReason] = useState("");
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();
    const headers = LoginController()

    const handleSub = (e) => {
        e.preventDefault();
        if(!reason ){
            Swal.fire({
               icon: "error",
               title: "Oops...",
               text: "Faltan datos."
            });
        }else{
            dispatch(addDenuncia(reason, id, headers));
            navigate(`/home`);
        }        

    }

  return (
    <DivContainer className={styles.contactForm}>
       <StyledCard className={styles.contenedorGral}>
           <form onSubmit={handleSub}>
           <div >
               <Label className={styles.titulos}>Motivo denuncia:</Label><br/>
               <Select 
                  type={'text'} 
                  className={styles.selectMotivos}
                  value={reason}
                  id={'reason'}
                  onChange={(e) => {setReason(e.target.value)}}
                >
                  <option value={null}>Motivos</option>  
                  <option value={"Mucha humedad en los hambientes"}>Mucha humedad en los hambientes</option>
                  <option value={"Fotos fasas"}>Fotos fasas</option>
                  <option value={"Mala predispocición del dueño"}>Mala predispocición del dueño</option>
                  <option value={"No se presentó a la visita"}>No se presentó a la visita</option>
                </Select>
           </div>

           
            <Button className={styles.btnSubmit} type="submit">
                Denunciar
            </Button>
            
            </form>
        </StyledCard>
    </DivContainer>
  )
}

