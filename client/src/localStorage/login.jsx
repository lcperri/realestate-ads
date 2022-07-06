import showCookies from "../functions/showCookies";
import { useEffect, useState } from 'react';

function LoginController(){
   const id = localStorage.getItem('id');
   var auth = '';

   if (id) {
      auth = showCookies('auth-token');
   }
   
   return(
      {
         headers: { 
            'auth-token': auth,
            'id': id
         }
      }
   )
}

export default LoginController;