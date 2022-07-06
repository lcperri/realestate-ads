import showCookies from "../functions/showCookies";
import { useEffect, useState } from 'react';

function LoginController(){
   const id = localStorage.getItem('id');
   const token = localStorage.getItem('auth-token');
   // var auth = '';

   // if (id) {
   //    auth = showCookies('auth-token');
   // }
   
   return(
      {
         headers: { 
            'auth-token': token,
            'id': id
         }
      }
   )
}

export default LoginController;