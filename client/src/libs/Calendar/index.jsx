import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';

import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { calendar } from './../../redux/actions';

export default function Calendar () {
  const dispatch = useDispatch();
  const id = localStorage.getItem('id');
   useEffect(() => {
      function start() {
         gapi.client.init({
            clientId: process.env.CLIENT_ID,
            scope: 'calendar',
         });
      }

      gapi.load('client:auth2', start);
   }, []);


   const successResponseGoogle = (response) => {
      dispatch(calendar(response, id));
   }

   const errorResponseGoogle = (response) => {
      console.log('No se pudo autenticar su usuario.', response);
   };

   return (
   <>
      <h2>Se necesitan permisos para acceder a su calendario.</h2>
      <GoogleLogin
        clientId="394343158069-32t8sde06fkbaib24hu1v95g1oqac8pm.apps.googleusercontent.com"
        buttonText="Autorizar calendario"
        onSuccess={successResponseGoogle}
        onFailure={errorResponseGoogle}
        responseType='code'
        accessType='offline'
        scope='openid email profile https://www.googleapis.com/auth/calendar'
      />
    </>
  );
}