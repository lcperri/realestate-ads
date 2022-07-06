export function SaveToken(tokenHeader){
   localStorage.setItem('auth-token', tokenHeader);
}

export function SaveId(idUser){
   localStorage.setItem('id', idUser);
}

export function SaveRange(range){
   localStorage.setItem('range', range);
}

export function SaveLastName(lastName){
   localStorage.setItem('last-name', lastName);
}

export function SaveName(name){
   localStorage.setItem('name', name);
}

export function RemoveToken(){
   localStorage.removeItem('auth-token');
}

export function RemoveId(){
   localStorage.removeItem('id');
}

export function RemoveRange(){
   localStorage.removeItem('range');
}

export function RemoveLastName(){
   localStorage.removeItem('last-name');
}

export function RemoveName(){
   localStorage.removeItem('name');
}