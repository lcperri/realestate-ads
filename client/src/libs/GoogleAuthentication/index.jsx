import { useDispatch } from 'react-redux/es/exports';
import { login } from '../../redux/actions';

import { GoogleLogin } from 'react-google-login';

import styles from './styles.module.css';

export default function GoogleAuthenticator () {
  const dispatch = useDispatch();
  
  const successResponseGoogle = (response) => {
    dispatch(login(response));
  }

  const errorResponseGoogle = (response) => {
    console.log('No se pudo autenticar su usuario.', response);
  };

  return (
    <>
      <GoogleLogin buttonClassName={styles.btnGoogle}
        clientId="394343158069-32t8sde06fkbaib24hu1v95g1oqac8pm.apps.googleusercontent.com"
        buttonText="Ingresar con Google"
        onSuccess={successResponseGoogle}
        onFailure={errorResponseGoogle}
        scope='openid email profile'
      />
    </>
  );
}