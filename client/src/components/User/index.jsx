import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import './UserCreate.css';


//---funcion validadora de errores en los inputs-----
function validators(input){
    const errors = {};

    if(!input.name){errors.name = "Pleace, name is required";}
    if(!/^[a-zA-Z\s]*$/.test(input.name)){errors.name = "Pleace, enter only letters";}

    if(!input.lastName){errors.lastName = "Pleace, lastName is required";} 
    if(!/^[a-zA-Z\s]*$/.test(input.lastName)){errors.lastName = "Pleace, enter only letters";}

    if(!input.password){errors.password = "Pleace, password is required";} 
    
    if(!input.birthday){errors.birthday = "Pleace, birthday is required";} 

    if(!input.email){errors.email = "Pleace, email is required";} 

    if(!input.dni){errors.dni = "Pleace, dni is required";} 

    if(!input.telephone){errors.telephone = "Pleace, telephone is required";} 

    if(!input.avatar){errors.avatar = "Pleace, avatar is required";} 
    
    return errors;
}
export default function UserCreate(){

    const inisitalState = {name:"", lastName:"", password:"", birthday:"", email:"", dni:"", telephone:"", avatar:""};
    const [input, setInput] = useState(inisitalState);
    const [error, setError] = useState(inisitalState);
    const allUsers = useSelector(state => state.users);
    let buscaUser = allUsers.find(u => u.dni === input.dni);

    const handlerCH = (e) => {
        setInput({...input, [e.target.id]: e.target.value});
        setInput(validators({...input, [e.target.id]: e.target.value}));
    };
    const handlerS = (e) => {};

    return(
        <div className="cont-gral-create">

            <div className="div-recuadro">
                <form onSubmit={handlerS} className="cont-formulario">
                    
                    <div className="grupo1">
                        <div className="nombre">
                            <label className="label">Nombre: </label>
                            <input className={error.name ? "errorInput" : "itemInput"} type={'text'} id={'name'} value={input.name} onChange={handlerCH}/>
                            {error.name && (<div><span className="span-error">{error.name}</span></div>)}
                            {/*muestro msj SI el poke a crear ya existe */}
                            {buscaUser && (<div><span className="span-error">El Usuario ya existe!!</span></div>)}
                        </div>

                        <div className="lastName">
                            <label className="label">LastName: </label>
                            <input className={error.lastName ? "errorInput" : "itemInput"} type={'text'} id={'lastName'} value={input.lastName} onChange={handlerCH}/>
                            {error.lastName && (<div><span className="span-error">{error.lastName}</span></div>)}
                        </div>

                        <div className="password">
                            <label className="label">Password: </label>
                            <input className={error.password ? "errorInput" : "itemInput"} type='password' id={'password'} value={input.password} onChange={handlerCH}/>
                            {error.password && (<div><span className="span-error">{error.password}</span></div>)}
                        </div>

                        <div className="birthday">
                            <label className="label">Birthday: </label>
                            <input className={error.birthday ? "errorInput" : "itemInput"} type='date' id={'birthday'} value={input.birthday} onChange={handlerCH}/>
                            {error.birthday && (<div><span className="span-error">{error.birthday}</span></div>)}
                        </div>

                    </div> 
   
                    <div className="grupo2">
                        <div className="email">
                            <label className="label">Email: </label>
                            <input className={error.email ? "errorInput" : "itemInput"} type={'text'} id={'email'} value={input.email} onChange={handlerCH}/>
                            {error.email && (<div><span className="span-error">{error.email}</span></div>)}
                        </div>

                        <div className="dni">
                            <label className="label">Dni: </label>
                            <input className={error.dni ? "errorInput" : "itemInput"} type={'number'} id={'dni'} value={input.dni} onChange={handlerCH}/>
                            {error.dni && (<div><span className="span-error">{error.dni}</span></div>)}
                        </div>

                        <div className="telephone">
                            <label className="label">Telephone: </label>
                            <input className={error.email ? "errorInput" : "itemInput"} type={'number'} id={'telephone'} value={input.telephone} onChange={handlerCH}/>
                            {error.telephone && (<div><span className="span-error">{error.telephone}</span></div>)}
                        </div>

                        <div className="avatar">
                            <label className="label">Avatar: </label>
                            <input className={error.avatar ? "errorInput" : "itemInput"} type={'text'} id={'avatar'} value={input.avatar} onChange={handlerCH}/>
                            {error.avatar && (<div><span className="span-error">{error.avatar}</span></div>)}
                        </div>
                    </div> 

                    <div className="div-btn-create">
                       <input className="btn-create" type={'submit'} value={'Create Poke'} />
                    </div>
                </form>
            </div>
            
        </div>
    )
}