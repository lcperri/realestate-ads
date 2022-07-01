import React, { useEffect, useState } from "react";
import './Login.css'
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
      <DivContainer>
          <div className="login">
              <div className="cont-login">

                  <form onSubmit={handleSubmit} className="form-login">

                      <h5 className="titulo">Formulario Login</h5>
                
                      <label className="lab-email">Correo electrónico:</label>
                      <br></br>
                      <input className="input-email" type={'text'} id={'email'} value={email} 
                          onChange={(e) => validateUser(e.target.value)} placeholder={'Usuario'}/>
                      {!error ? null : <span className="error-span">{error}</span>}
                      <br></br>

                      <label className="lab-email">Contraseña:</label>
                      <br></br>
                      <input className="input-password" type={'text'} id={'password'} value={password} 
                          onChange={(e) => setPassword(e.target.value)} placeholder={'Contraseña'}/>

                        <br></br>
                        <button className="btn-login" type="submit" disabled={!!error}>Ingresar</button>
                         
                        <br></br>
                        <p className="p-olvido">¿Olvidó su contraseña?</p>
                        <GoogleAuthenticator className="btn-google"></GoogleAuthenticator >
                    </form>
                </div>
           </div>
        </DivContainer>
    )
}