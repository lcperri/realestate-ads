
import StyledCard from '../../styledComponents/StyledCard'
import styles from './styles.module.css'
import DivContainer from '../../styledComponents/DivContainer';
import Button from "../../styledComponents/Button";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import LoginController from '../../localStorage/login'; 
import { addDenuncia } from '../../redux/actions';


export default function FormDenuncia (){

    const [input, setInput] = useState({
        reason:"",
    });
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();
    const headers = LoginController()

const flag = useSelector(state => state.flag);

    const handleChange = (e) => {
       setInput({
            ...input,[
            e.target.id]: e.target.value
        })
    };
    const handleSub = (e) => {
        e.preventDefault();
        if(!input.reason ){
            Swal.fire({
               icon: "error",
               title: "Oops...",
               text: "Faltan datos."
            });
        }
        dispatch(addDenuncia(input, id, headers));
        navigate(`/home`);

    }
console.log("flag:", flag)
  return (
    <DivContainer className={styles.contactForm}>
       <StyledCard className={styles.contenedorGral}>
           <form onSubmit={handleSub}>
           <div >
               <label className={styles.titulos}>Razon:</label><br/>
               <input 
                  type={'text'} 
                  className={styles.razon}
                  value={input.reason}
                  id={'reason'}
                  onChange={handleChange}
                />
           </div>

           
            <Button className={styles.btnSubmit} type="submit">
                Publicar
            </Button>
            
            </form>
        </StyledCard>
    </DivContainer>
  )
}

