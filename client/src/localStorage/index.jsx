export function SaveToken(tokenHeader){
   localStorage.setItem('auth-token', tokenHeader);
}

export function SaveRefreshToken(tokenHeader){
   localStorage.setItem('refresh-token', tokenHeader);
}

export function SaveId(idUser){
   localStorage.setItem('id', idUser);
}

export function SaveRange(range){
   localStorage.setItem('range', range);
}