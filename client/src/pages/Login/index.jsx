import React, { useEffect, useState } from "react";
import styles from './styles.module.css';
import Button from "../../styledComponents/Button"
import DivContainer from "../../styledComponents/DivContainer";
import GoogleAuthenticator from "../../libs/GoogleAuthentication";

import { useDispatch, useSelector } from 'react-redux/es/exports';
import { login } from "../../redux/actions";
import InputComponent from "../../components/FormElements/Input";
import { regExps } from "../../components/FormElements/regExpressions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.logged);

  const navigate = useNavigate();

  const [email, setEmail] = useState({ key: "", valid: null });
  const [password, setPassword] = useState({ key: "", valid: null });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.valid === 'true' && password.valid === 'true') {
      dispatch(login({
        email: email.key,
        password: password.key
      }))
    }
    else Swal.fire('Revise sus datos.')
  }

  useEffect(() => {
    if (logged) {
      navigate('/home');
    }
  }, [logged]);

  return (
    <div className={styles.createProperty}>
      <div className={styles.title}>
        INICIAR SESIÓN
      </div>
      <form onSubmit={handleSubmit} className={styles.formLogin}>
          <DivContainer className="login">
            <InputComponent
              // className='addressCreateForm'
              name='Correo electrónico:'
              type='text'
              placeHolder='Usuario'
              errorLeyend={regExps.email.errorLeyend}
              regExp={regExps.email.regExp}
              state={email}
              setState={setEmail}
              width='100%'
            />
            {/* <div className="group">
                  <Label for="">Correo electrónico:</Label>
                  <Input className={styles.email} type={'text'} id={'email'} value={email} onChange={(e) => validateUser(e.target.value)} placeholder={'Usuario'}/>
                  {!error ? null : <span className={styles.errorSpan}>{error}</span>}                    
                </div> */}
            <InputComponent
              // className='addressCreateForm'
              name='Contraseña:'
              type='password'
              placeHolder='Contraseña'
              errorLeyend={regExps.password.errorLeyend}
              regExp={regExps.password.regExp}
              state={password}
              setState={setPassword}
              width='100%'
            />
            {/* <div className="group">
                  <Label for="">Contraseña:</Label>
                  <Input className={styles.pass} type={'password'} id={'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder={'Contraseña'} />
                </div> */}

            <div className="group">
              <Button className={styles.buttonIngresar} type="submit" disabled={!!error}>Ingresar</Button>
            </div>

            <div className={styles.googleAutenticatorWrapper}>
              {/* <p className={styles.Olvido}>¿Olvidó su contraseña?</p> */}
              <p>ó</p>
              <GoogleAuthenticator></GoogleAuthenticator>
            </div>
          </DivContainer>
      </form>

    </div>
  )
}