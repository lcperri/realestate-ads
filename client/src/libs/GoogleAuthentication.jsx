import GoogleLogin from 'react-google-login';

export default function GoogleAuthenticator () {

   const successResponseGoogle = () => {};

   const errorResponseGoogle = () => {};

   return <GoogleLogin
   clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
   buttonText="Login"
   onSuccess={successResponseGoogle}
   onFailure={errorResponseGoogle}
   cookiePolicy={'single_host_origin'}
 />
}