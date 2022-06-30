import React, { useEffect, useState } from "react";
import './Login.css'
import DivContainer from "../../styledComponents/DivContainer";
import GoogleAuthenticator from "../../libs/GoogleAuthentication";

export default function Login(){
  
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState('');
    const [boton, setBoton] = useState(true);

    function validateUser(value) {
        if(!/\S+@\S+\.\S+/.test(value)) {
          setError('el usuario tiene que ser un email');
        } else {
          setError('');
        }
        setMail(value);
      }

    useEffect(()=>{
        if(mail && pass && !error){
        
            }    setBoton(false);
    }, [mail, pass]);

    
    const handlerS = (e) => {
        e.preventDefault();
    
        if(!mail || !pass){alert("faltan datos")}
        else{
          alert("correcto");
        }
      }   

    return(
        <DivContainer>
           <div className="login">
                <div className="cont-login">

                    <form onSubmit={handlerS} className="form-login">

                        <h5 className="titulo">Formulario Login</h5>
                  
                        <label className="lab-email">E-mail:</label>
                        <br></br>
                        <input className="input-email" type={'text'} id={'email'} value={mail} 
                            onChange={(e) => validateUser(e.target.value)} placeholder={'Usuario'}/>
                        {!error ? null : <span className="error-span">{error}</span>}
                        <br></br>

                        <label className="lab-email">Password:</label>
                        <br></br>
                        <input className="input-pass" type={'text'} id={'password'} value={pass} 
                            onChange={(e) => setPass(e.target.value)} placeholder={'Contraseña'}/>

                        <br></br>
                        <button className="btn-login" type="submit" disabled={!!error}>Ingresar</button>
                         
                        <br></br>
                        <p className="p-olvido">¿Olvido contraseña?</p>
                        <GoogleAuthenticator className="btn-google"></GoogleAuthenticator >
                    </form>
                </div>
           </div>
        </DivContainer>
    )
}