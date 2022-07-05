import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import './styles.module.css';
import { createUser, getAllUsers } from '../../redux/actions';
import DivContainer from "../../styledComponents/DivContainer";
import Cloudinary from "../Cloudinary";
import Button from "../../styledComponents/Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GrupoInput, Option, ErrorLeyend, ValidationIcon, TermsAndConditions, SubmitContainer, MensajeError, MensajeExito, Label } from "../../styledComponents/StyledFormElements";
import { faCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import Input from "../FormElements/Input";
import Select from "../FormElements/Select";
import { regExps } from "../FormElements/regExpressions";
import toast, { Toaster } from 'react-hot-toast';
import Swal from "sweetalert2";
import {useNavigate } from "react-router-dom";

//name,lastName,password,birthday,email,dni,telephone,range

export default function UserCreate(){

    //para las tarjetas
    const[contador,setContador] = useState(0);    
    const [errorsFirstCard, setErrorsFirstCard] = useState(true);
    const [errorsSecondCard, setErrorsSecondCard] = useState(true);
    //estado de c/input
    const[name, setName] = useState({key: '', valid: null});
    const[lastName, setLastName] = useState({key: '', valid: null});
    const[dni, setDni] = useState({key: '', valid: null});
    const[telephone, setTelephone] = useState({key: '', valid: null});
    const[birthday, setBirthday] = useState({key: '', valid: null});
    const[email, setEmail] = useState({key: '', valid: null});
    const[password, setPassword] = useState({key: '', valid: null});
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
        setRange({ key: '', valid: null });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setUserCreated(true);
        setTermsAndConditions(false);
        dispatch(createUser({
            name: name.key,
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
        if (name.valid === 'true' && lastName.valid === 'true' && dni.valid === 'true' && birthday.valid === 'true'  && telephone.valid === 'true')
            setErrorsFirstCard(false)
        else
            setErrorsFirstCard(true)
        //2da card
        if (email.valid === 'true' && password.valid === 'true' && range.valid === 'true')
            setErrorsSecondCard(false)
        else
            setErrorsSecondCard(true)
    },[name, lastName, dni, telephone, birthday, email, password, range]);

    //términos y condiciones:
    const onChangeTerms = (e) => {
        setTermsAndConditions(e.target.checked)
    }

    return(
        <div className="createProperty">
            <form onSubmit={handleOnSubmit} id='form'>
                <div className="form">
                    <div className='title'>
                        Date de alta
                    </div>
                </div>
            </form>
        </div>
    )
}