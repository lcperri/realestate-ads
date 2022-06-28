import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux/es/exports';
import { googleLogin } from '../../redux/actions';

export default function GoogleAuthenticator () {
  const dispatch = useDispatch();


  const successResponseGoogle = (response) => {
    dispatch(googleLogin(response));
  }


  const errorResponseGoogle = (response) => {
    console.log('No se pudo autenticar su usuario.', response);
  };

  return (
    <>
      <GoogleLogin
        clientId="394343158069-32t8sde06fkbaib24hu1v95g1oqac8pm.apps.googleusercontent.com"
        buttonText="Ingresar con Google"
        onSuccess={successResponseGoogle}
        onFailure={errorResponseGoogle}
      />
      <GoogleLogout
        clientId="394343158069-32t8sde06fkbaib24hu1v95g1oqac8pm.apps.googleusercontent.com"
        onLogoutSuccess={errorResponseGoogle}
      />
    </>
  );
}