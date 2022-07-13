import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../styledComponents/Button";
import DivContainer from "../../styledComponents/DivContainer";
import { Input } from "../../styledComponents/StyledFormElements";
import styles from './styles.module.css'
import imagw from './whatsapp.png';
import { useParams } from 'react-router-dom';
import { clear, GetUserById, contactForm, getownersphone, switchBetweenForms } from "../../redux/actions";
import LoginController from "../../localStorage/login";
import toast, { Toaster } from "react-hot-toast";
import capitalize from "../../functions/capitalize";
import LabelRed from '../../styledComponents/LabelRed'
import StyledText from "../../styledComponents/StyledText";
import './toast.css'
import { StyledLink } from "../../styledComponents/StyledLink";
import { DivRow } from "../../styledComponents/DivRow";

export default function FormContacto() {
    const ref = useRef(null);
    const [input, setInput] = useState({
        message: 'Hola, he visto la propiedad y me interesa, quiero comunicarme contigo.',
        date: ''
    })
    const [telephone, setTelephone] = useState(true) //habilita o deshabilita input telephone
    const { id } = useParams() //params solo trae id de propiedad
    const dispatch = useDispatch()
    const headers = LoginController()

    const userId = localStorage.getItem('id')
    const user = useSelector(state => state.user);
    const phone = useSelector(state => state.telephone);
    
    useEffect(() => {
        dispatch(getownersphone(id));
    }, [])

    let url = `https://wa.me/${phone}?text=Me%20gustaría%20saber%20el%20precio%20de%20la%20propiedad`

    const data = {
        name: user.name + " " + user.lastName,
        email: user.email,
        message: input.message,
        property: id,
        telephone: input.phoneNumber
    }

    useEffect(() => {
        dispatch(GetUserById(userId))
        return () => { dispatch(clear()) }
    }, [])

    useEffect(() => {
        if (user.telephone && user.telephone !== 0 ){
            setTelephone(true)
            setInput({
                ...input,
                phoneNumber: user.telephone
            })
        } else if (user.telephone === 0) {
            setTelephone(false)
            setInput({
                ...input,
                phoneNumber: ''
            })
        }
    }, [user])

    useEffect(() => {
        telephone === false && ref.current.focus();
    }, [telephone])

    const handleOnChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const editPhone = () => {
        setTelephone(false)
    }

    const onSubmit = () => {
        dispatch(contactForm(data, headers))
        toast.success('¡Le hemos notificado al propietario que deseas comunicarte con él. Pronto recibirás noticias!',
            {
                icon: '👏',
                duration: 4000,
                style: {
                    padding: '20px 25px 20px 25px',
                    borderRadius: '20px',
                    position: 'bottom-center',
                },
            }
        )
    }

    const switchButton = () => {
        dispatch(switchBetweenForms());
    }

    return (
        <DivContainer className={styles.contactForm}>
            <h1>Formulario de contacto</h1>
            <div className={styles.inputWrapper}>
                <label> Email: <LabelRed><LabelRed>*</LabelRed></LabelRed></label>
                <Input className={styles.input} type={'text'} placeholder={'Email'} value={user.email} disabled='true'></Input>
            </div>
            <div className={styles.inputWrapper}>
                <label> Nombres: <LabelRed>*</LabelRed></label>
                <Input className={styles.input} type={'text'} placeholder={'Nombre'} value={capitalize(user.name + ' ' + user.lastName)} disabled='true' />
            </div>
            <div className={styles.inputWrapper}>
                <label>Teléfono:
                    <LabelRed>*</LabelRed>
                    { user.telephone && user.telephone !== 0 && <Button onClick={() => editPhone()}>Editar</Button> }
                </label>
                <Input className={styles.input} ref={ref} name='phoneNumber' type='number' placeholder={'Teléfono'} value={input.phoneNumber} disabled={telephone} onChange={handleOnChange} />
            </div>
            <div className={styles.inputWrapper}>
                <label>Mensaje:</label>
                <textarea className={styles.descrip} name='message' type={'text'} placeholder={'Mensaje:'} value={input.message} onChange={handleOnChange} />
            </div>
            <DivRow alignIt='center'>
                <a href={url}><img src={imagw} className={styles.whatsapp} /></a>
                <Button  onClick={onSubmit}>Contactar</Button>
                <Button onClick={switchButton}>Agendar Visita</Button>
            </DivRow>
            <Toaster />
        </DivContainer>
    )
}   