
import StyledCard from '../../styledComponents/StyledCard'
import styles from './styles.module.css'
import DivContainer from '../../styledComponents/DivContainer';
import Button from "../../styledComponents/Button";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from "sweetalert2";
import LoginController from '../../localStorage/login'; 
import { addDenuncia } from '../../redux/actions';


export default function FormDenuncia (){

    const [input, setInput] = useState({
        razon:"",
        denuncia: ""
    });
    const dispatch = useDispatch();
    const {id} = useParams();
    const navigate = useNavigate();
    const headers = LoginController()

    const handleChange = (e) => {
       setInput({
            ...input,[
            e.target.id]: e.target.value
        })
    };
    const handleSub = (e) => {
        e.preventDefault();
        if(!input.razon || !input.denuncia){Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Faltan datos.",});}
        dispatch(addDenuncia(input, id, headers));
        navigate(`/home`);

    }

  return (
    <DivContainer className={styles.contactForm}>
       <StyledCard className={styles.contenedorGral}>
           <form onSubmit={handleSub}>
           <div >
               <label className={styles.titulos}>Razon:</label><br/>
               <input 
                  type={'text'} 
                  className={styles.razon}
                  value={input.razon}
                  id={'razon'}
                  onChange={handleChange}
                />
           </div>

           <div>
              <label className={styles.titulos}>Denuncia:</label><br/>
              <textarea 
                type={'text'} 
                className={styles.denuncia}
                value={input.denuncia}
                id={'denuncia'}
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

