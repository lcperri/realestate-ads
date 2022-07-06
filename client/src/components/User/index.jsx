import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from './styles.module.css';
import { createUser } from '../../redux/actions';
import DivContainer from "../../styledComponents/DivContainer";
//import Cloudinary from "../Cloudinary";
import Button from "../../styledComponents/Button"
import Select from "../FormElements/Select";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TermsAndConditions, SubmitContainer, MensajeError, Label } from "../../styledComponents/StyledFormElements";
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import Input from "../FormElements/Input";
import { regExps } from "../FormElements/regExpressions";
import Swal from "sweetalert2";
import {useNavigate } from "react-router-dom";

//name,lastName,password,birthday,email,dni,telephone,range

export default function UserCreate(){

    //para las tarjetas
    const[contador,setContador] = useState(0);    
    const [errorsFirstCard, setErrorsFirstCard] = useState(true);
    const [errorsSecondCard, setErrorsSecondCard] = useState(true);
    const [errorsThirdCard, setErrorsThirdCard] = useState(true);
    //estado de c/input
    const[name, setName] = useState({key: '', valid: null});
    const[lastName, setLastName] = useState({key: '', valid: null});
    const[dni, setDni] = useState({key: '', valid: null});
    const[telephone, setTelephone] = useState({key: '', valid: null});
    const[birthday, setBirthday] = useState({key: '', valid: null});
    const[email, setEmail] = useState({key: '', valid: null});
    const[password, setPassword] = useState({key: '', valid: null});
    const[repitPassword,  setRepitPassword] = useState({key: '', valid: null});
    const[range, setRange] = useState({key: '', valid: null});
    
    const [termsAndConditions, setTermsAndConditions] = useState(false)
    const [userCreated, setUserCreated] = useState(false)
    const [formOk, setFormOk] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const cleanForm = () => {
        setName({ key: '', valid: null });
        setLastName({ key: '', valid: null });
        setDni({ key: '', valid: null });
        setTelephone({ key: '', valid: null });
        setBirthday({ key: '', valid: null });
        setEmail({ key: '', valid: null });
        setPassword({ key: '', valid: null });
        setRepitPassword({ key: '', valid: null });
        setRange({ key: '', valid: null });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setUserCreated(true);
        setTermsAndConditions(false);
        dispatch(createUser({
            name: name.key.toLowerCase(),
            lastName: lastName.key,
            dni: dni.key,
            telephone: telephone.key,
            birthday: birthday.key,
            email: email.key,
            password: password.key,
            range: range.key,
        }))
        .then(() => {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Usuario/a creado/a exitosamente',
                showConfirmButton: false,
                timer: 1500
            });
            cleanForm();
        })
        .catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Oops, algo no salió bien. Por favor intenta nuevamente.'
            })
            navigate('/signup')
        })
    }

    //habilita botones siguiente de cards:
    useEffect(() => {
        //1ra card
        if (name.valid === 'true' && lastName.valid === 'true' && email.valid === 'true')
            setErrorsFirstCard(false)
        else
            setErrorsFirstCard(true)
        //2da card
        if ( dni.valid === 'true' && birthday.valid === 'true'  && telephone.valid === 'true')
            setErrorsSecondCard(false)
        else
            setErrorsSecondCard(true)
        //3da card
        if ( range.valid === 'true' && password.valid === 'true' && repitPassword.valid === 'true')
            setErrorsThirdCard(false)
        else
            setErrorsThirdCard(true)
        
    },[name, lastName, dni, telephone, birthday, email, password, repitPassword, range]);

    //términos y condiciones:
    const onChangeTerms = (e) => {
        setTermsAndConditions(e.target.checked)
    }
    
    //valida todos los inputs y selects del form cuando hago click en términos:
    useEffect (()=> {
        if (
            name.valid === 'true' &&
            lastName.valid === 'true' &&
            dni.valid === 'true' &&
            telephone.valid === 'true' &&
            birthday.valid === 'true' &&
            email.valid === 'true' &&
            password.valid === 'true' &&
            range.valid === 'true' &&
            termsAndConditions === true
        ) setFormOk(true)
        else setFormOk(false)
    }, [termsAndConditions]);

    return(
        <div className="createProperty">
            <form onSubmit={handleOnSubmit} id='form'>
                <div className="form">
                    <div className='title'>
                        Date de alta en nuestra app!!
                    </div>
                    {/*tarjeta 1 */}
                    {
                        contador === 0 &&
                        <DivContainer className="create">
                            <div className="subTitle">Dinos quien eres:</div>
                            <div className="addressWrapper">
                                <Input 
                                    className='addressCreateForm'
                                    name='Nombre:'
                                    type='text'
                                    placeHolder={'Nombre'}
                                    /* errorLeyend={regExps.city.errorLeyend}
                                    regExp={regExps.city.regExp} */
                                    state={name}
                                    setState={setName}
                                />
                                <Input 
                                    className='addressCreateForm'
                                    name='Apellido:'
                                    type='text'
                                    placeHolder={'Apellido'}
                                    /* errorLeyend={regExps.city.errorLeyend}
                                    regExp={regExps.city.regExp} */
                                    state={lastName}
                                    setState={setLastName}
                                />
                                
                                <Input 
                                    className='addressCreateForm'
                                        name='Email:'
                                        type='text'
                                        placeHolder={'Email'}
                                        /* errorLeyend={regExps.email.errorLeyend}
                                        regExp={regExps.email.regExp} */
                                        state={email}
                                    setState={setEmail}
                                />                                
                            </div>
                            <div className="buttonsNextBack">
                                <Button /* disabled={errorsFirstCard} */ onClick={() => setContador(1)}> Siguiente</Button>
                            </div>                            
                        </DivContainer>
                    }

                    {/*tarjeta 2 */}
                    {
                        contador === 1 &&
                        <DivContainer className="create">
                            <div className="subTitle">Datos personales:</div>
                            <div className="addressWrapper">
                            <Input 
                                    className='addressCreateForm'
                                    name='Dni:'
                                    type='number'
                                    placeHolder={'Dni'}
                                    /* errorLeyend={regExps.city.errorLeyend}
                                    regExp={regExps.city.regExp} */
                                    state={dni}
                                    setState={setDni}
                                />
                                <Input 
                                    className='addressCreateForm'
                                    name='Telephone:'
                                    type='number'
                                    placeHolder={'Telephone'}
                                    /* errorLeyend={regExps.city.errorLeyend}
                                    regExp={regExps.city.regExp} */
                                    state={telephone}
                                    setState={setTelephone}
                                />
                                <Input 
                                    className='addressCreateForm'
                                    name='Birthday:'
                                    type='date'
                                    placeHolder={'Birthday'}
                                    /* errorLeyend={regExps.city.errorLeyend}
                                    regExp={regExps.city.regExp} */
                                    state={birthday}
                                    setState={setBirthday}
                                />
                            </div>
                            <div className="buttonsNextBack">
                                <Button onClick={() => setContador(0)}>Anterior</Button>
                                <Button /* disabled={errorsFirstCard} */ onClick={() => setContador(2)}> Siguiente</Button>
                            </div>                            
                        </DivContainer>
                    }
                    {/*tarjeta 3 */}
                    {
                        contador === 2 &&
                        <>
                           <div className={styles.create3}>
                           <div className="subTitle">Datos de usuario:</div>
                            <div className="ddressWrapper">
                                <Select
                                    className='adjustOperationSelect'
                                    name='Tipo de Usuario'
                                    /* errorLeyend={regExps.tipoUsuario.errorLeyend} */
                                    state={range}
                                    setState={setRange}
                                    options={[
                                        { description: 'Tipo Usuario:', value: null },
                                        { description: 'Free', value: 'free' },
                                        { description: 'Premium', value: 'premium' },
                                        { description: 'Vip', value: 'vip' },
                                        { description: 'Adim', value: 'admin' }
                                    ]}
                                // // onChange={handleChange} 
                                />
                                <Input 
                                    className='addressCreateForm'
                                        name='Contraseña:'
                                        type='text'
                                        placeHolder={'Password'}
                                        /* errorLeyend={regExps.password.errorLeyend}
                                        regExp={regExps.password.regExp} */
                                        state={password}
                                    setState={setPassword}
                                />
                                    
                                    <Input 
                                    className='addressCreateForm'
                                        name='Repetir Contraseña:'
                                        type='text'
                                        placeHolder={'Repetir Contraseña'}
                                        /* errorLeyend={regExps.password.errorLeyend}
                                        regExp={regExps.password.regExp} */
                                        state={repitPassword}
                                    setState={setRepitPassword}
                                />    
                            </div>
                                <div className="buttonsNextBack">
                                   <Button onClick={() => setContador(1)}>Anterior</Button>                             
                                </div>                            
                           </div>

                           <TermsAndConditions>
                           <Label>
                               <input
                                   type='checkbox'
                                   name='terms'
                                   id='terms'
                                   onChange={onChangeTerms}
                                   checked={termsAndConditions} 
                                />
                                Acepto los términos y condiciones.
                           </Label>
                           </TermsAndConditions>
                           {false && <MensajeError>
                           <p>
                               <FontAwesomeIcon icon={faCircleExclamation} />
                               <b>Error:</b> Para darte de alta tienes que llenar el formulario correctamente.
                           </p>
                           </MensajeError>}
                           <SubmitContainer>
                               <Button /* disabled={!formOk} */ className="submitCreateForm" type='submit'> Submit </Button>
                           </SubmitContainer>
                        </>
                    }                          
                </div>
            </form>
        </div>
    )
}