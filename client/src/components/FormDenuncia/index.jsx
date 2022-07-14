
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
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Tu denuncia ha sido recibida. Nuestros administradores están siempre pendientes y revisarán el caso.",
            showConfirmButton: true,
            // timer: 2500,
          }).then(() => {
            dispatch(addDenuncia({ reason }, id));
            navigate(-1, { replace: true});
          })
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
                  <option value={"Competencia desleal"}>Competencia desleal</option>
                  <option value={"Mal precio"}>Mal precio</option>
                  <option value={"Estafa"}>Estafa</option>
                  <option value={"Fotos falsas y/o engañosas"}>Fotos falsas y/o engañosas</option>
                  <option value={"Mala predisposición de parte del dueño"}>Mala predisposición de parte del dueño</option>
                  <option value={"No se presentó a la visita"}>No se presentó a la visita</option>
                  <option value={"Intento de robo y/o secuestro"}>Intento de robo y/o secuestro</option>
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

