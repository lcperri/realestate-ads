import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './UserCreate.css';
import { getAllUsers, createUser } from '../../redux/actions';

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
    
    return errors;
}
export default function UserCreate(){

    const inisitalState = {name:"", lastName:"", password:"", birthday:"", email:"", dni:"", telephone:"", avatar:""};
    const [input, setInput] = useState(inisitalState);
    const [error, setError] = useState(inisitalState);
    const allUs = useSelector(state => state.users);   
    const dispatch = useDispatch();
    /* console.log(allUs)
    let buskUser = allUs.find(u => u.dni !== '123')
    console.log("data:",buskUser)
 */
    useEffect(()=>{
        dispatch(getAllUsers());
    }, [dispatch]);

    const handlerCH = (e) => {
        setInput({...input, [e.target.id]: e.target.value});
        setError(validators({...input, [e.target.id]: e.target.value}));
    };
    const handlerS = (e) => {
        e.preventDefault();
        
        if(!input.name || !input.lastName || !input.password || !input.birthday || !input.email || !input.dni || !input.telephone ){
        }
        dispatch(createUser(input));
        dispatch(getAllUsers());
        setInput({name:"", lastName:"", password:"", birthday:"", email:"", dni:"", telephone:"", avatar:""});
        
    };

    return(
        <div className="cont-gral">

            <div className="div-rec">
                <form onSubmit={handlerS} className="cont-formulario">
                    
                    <div className="grupo1">
                        <div className="nombre">
                            <label className="label-g1">Nombre: </label>
                            <input className={error.name ? "errorInput" : "itemInput"} type={'text'} id={'name'} value={input.name} onChange={handlerCH}/>
                            {error.name && (<div><p className="p-error">{error.name}</p></div>)}                            
                        </div>

                        <div className="lastName">
                            <label className="label-g1">LastName: </label>
                            <input className={error.lastName ? "errorInput" : "itemInput"} type={'text'} id={'lastName'} value={input.lastName} onChange={handlerCH}/>
                            {error.lastName && (<div><p className="p-error">{error.lastName}</p></div>)}
                        </div>

                        <div className="password">
                            <label className="label-g1">Password: </label>
                            <input className={error.password ? "errorInput" : "itemInput"} type='password' id={'password'} value={input.password} onChange={handlerCH}/>
                            {error.password && (<div><p className="p-error">{error.password}</p></div>)}
                        </div>

                        <div className="birthday">
                            <label className="label-g1">Birthday: </label>
                            <input className={error.birthday ? "errorInput" : "itemInput"} type='date' id={'birthday'} value={input.birthday} onChange={handlerCH}/>
                            {error.birthday && (<div><p className="p-error">{error.birthday}</p></div>)}
                        </div>

                    </div> 
   
                    <div className="grupo2">
                        <div className="email">
                            <label className="label-g2">Email: </label>
                            <input className={error.email ? "errorInput" : "itemInput-g2"} type={'text'} id={'email'} value={input.email} onChange={handlerCH}/>
                            {error.email && (<div><p className="p-error">{error.email}</p></div>)}
                        </div>

                        <div className="dni">
                            <label className="label-g2">Dni: </label>
                            <input className={error.dni ? "errorInput" : "itemInput-g2"} type={'number'} id={'dni'} value={input.dni} onChange={handlerCH}/>
                            {error.dni && (<div><p className="p-error">{error.dni}</p></div>)}
                            {/*muestro msj SI el poke a crear ya existe */}
                            {/* {buskUser && (<div><p className="p-error">El Usuario ya existe!!</p></div>)}  */}
                        </div>

                        <div className="telephone">
                            <label className="label-g2">Telephone: </label>
                            <input className={error.email ? "errorInput" : "itemInput-g2"} type={'number'} id={'telephone'} value={input.telephone} onChange={handlerCH}/>
                            {error.telephone && (<div><p className="p-error">{error.telephone}</p></div>)}
                        </div>

                        <div className="avatar">
                            <label className="label-g2">Avatar: </label>
                            <input className={error.avatar ? "errorInput" : "itemInput-g2"} type={'text'} id={'avatar'} value={input.avatar} onChange={handlerCH}/>
                            {error.avatar && (<div><p className="p-error">{error.avatar}</p></div>)}
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