import React, { useEffect, useState } from "react";
import styles from './styles.module.css';
import Input from "../../styledComponents/Input";
import Label from "../../styledComponents/Label";
import Button from "../../styledComponents/Button"
import DivContainer from "../../styledComponents/DivContainer";
import GoogleAuthenticator from "../../libs/GoogleAuthentication";
import Calendar from "../../libs/Calendar";
import { useDispatch } from 'react-redux/es/exports';
import { login } from "../../redux/actions";

export default function Login(){
  const dispatch = useDispatch();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  function validateUser(value) {
      if(!/\S+@\S+\.\S+/.test(value)) {
        setError('el usuario tiene que ser un email');
      } else {
        setError('');
      }
      setEmail(value);
    }

  useEffect(()=>{
      if(email && password && !error){
      }
  }, [email, password]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email || !password) console.log("faltan datos");
    else dispatch(login({ email, password }))
  }   
  
  return(
      <div className="createProperty">

        <form onSubmit={handleSubmit} className="form-login">

          <div className="form">
            <div className='title'>
                FORMULARIO PARA LOGUEARTE
            </div>
            
            <DivContainer className="create">
            <div className='subContainerCreate'>
              <div className="addressWrapper">

                <div className="group">
                  <Label for="">Correo electrónico:</Label>
                  <Input className={styles.email} type={'text'} id={'email'} value={email} onChange={(e) => validateUser(e.target.value)} placeholder={'Usuario'}/>
                  {!error ? null : <span className={styles.errorSpan}>{error}</span>}                    
                </div>
                                    
                <div className="group">
                  <Label for="">Contraseña:</Label>                      
                  <Input className={styles.pass} type={'text'} id={'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Contraseña'}/>            
                </div>
                
                <div className="group">
                  <Button className={styles.buttonIngresar} type="submit" disabled={!!error}>Ingresar</Button>                
                </div>

                <div>
                  <p className={styles.Olvido}>¿Olvidó su contraseña?</p>
                  <GoogleAuthenticator className={styles.btnGoogle}></GoogleAuthenticator>
                </div>

              </div>
            </div>
            </DivContainer>
            
          </div>
        </form>                     
               
      </div>
    )
}