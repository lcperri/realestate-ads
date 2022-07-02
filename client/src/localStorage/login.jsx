function LoginController(){
   const token = localStorage.getItem('auth-token');
   const refreshToken = localStorage.getItem('refresh-token');
   const id = localStorage.getItem('id');
   return(
      {
         headers: { 
            'auth-token': token,
            'refresh-token': refreshToken,
            'id': id
         }
      }
   )
}

const headers = LoginController();

export default headers;