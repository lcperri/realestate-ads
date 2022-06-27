import React, { useState } from "react";
import './Login.css'
import DivContainer from "../../styledComponents/DivContainer";

export default function Login(){
  
    const [input, setInput] = useState({email: "", password: ""});

    const handleCH = (e) => {};
    const handleS = (e) =>{};

    return(
        <DivContainer>
           <div className="login">
                <div className="cont-login">
                    <form onSubmit={handleS} className="form-login">

                        <h5 className="titulo">Formulario Login</h5>
                  
                        <label className="lab-email">E-mail:</label>
                        <br></br>
                        <input className="input-email" type={'text'} id={'email'} value={input.email} onChange={handleCH}/>

                        <br></br>
                        <label className="lab-email">Pasword:</label>
                        <br></br>
                        <input className="input-pass" type={'text'} id={'password'} value={input.password} onChange={handleCH}/>

                        <br></br>
                        <button className="btn-login">Ingresar</button>

                    </form>
                </div>
           </div>
        </DivContainer>
    )
}