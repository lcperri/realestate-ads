import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../styledComponents/Button";
import DivContainer from "../../styledComponents/DivContainer";
import { Input } from "../../styledComponents/StyledFormElements";
import styles from './styles.module.css'
import imagw from './whatsapp.png';
import { useParams } from 'react-router-dom';
import { clear, GetUserById, contactForm } from "../../redux/actions";
import LoginController from "../../localStorage/login";
import toast, { Toaster } from "react-hot-toast";
import capitalize from "../../functions/capitalize";
import LabelRed from '../../styledComponents/LabelRed'
import StyledText from "../../styledComponents/StyledText";
import './toast.css'

export default function FormContacto() {
    const ref = useRef(null);
    const [input, setInput] = useState({
        message: 'Hola, he visto la propiedad y me interesa, quiero comunicarme contigo.',
        date: ''
    })
    const [telephone, setTelephone] = useState(true)
    const { id } = useParams() //params solo trae id de propiedad
    const dispatch = useDispatch()
    const headers = LoginController()

    const userId = localStorage.getItem('id')
    const user = useSelector(state => state.user);

    let url = `https://wa.me/${user.telephone}?text=Me%20gustaría%20saber%20el%20precio%20de%20la%20propiedad`

    const data = {
        name: user.name + user.lastName,
        email: user.email,
        message: input.message,
        property: id,
        visitDate: input.date,
    }

    useEffect(() => {
        dispatch(GetUserById(userId))
        return () => { dispatch(clear()) }
    }, [])

    useEffect(() => {
        console.log(user);
        user.telephone !== telephone ? setTelephone(true) : setTelephone(false)
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
        // toast('Here is your toast.')
        dispatch(contactForm(data, headers))
        toast.success('¡Le hemos notificado al propietario que deseas comunicarte con él. Pronto recibirás noticias!',
            {
                icon: '👏',
                duration: 4000,
                style: {
                    padding: '20px 20px 20px 20px',
                    borderRadius: '20px',
                    position: 'bottom-center',
                },
            }
        )
    }

    return (
        <DivContainer className='contactForm'>
            <h1 className={styles.titulo}>Formulario de contacto</h1>
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
                    <Button onClick={() => editPhone()}>Editar</Button>
                </label>
                <Input className={styles.input} ref={ref} name='phoneNumber' type='number' placeholder={'Teléfono'} value={user.telephone && user.telephone} disabled={telephone} onChange={handleOnChange} />
            </div>
            <div className={styles.inputWrapper}>
                <label>Mensaje:</label>
                <textarea className={styles.descrip} name='message' type={'text'} placeholder={'Mensaje:'} value={input.message} onChange={handleOnChange} />
            </div>
            <div className={styles.inputWrapper}>
                <label>Solicitar fecha de visita:</label>
                <Input className={styles.input} name='date' type='date' value={input.date} />
            </div>
            <div className={styles.container}>
                <a href={url}><img src={imagw} className={styles.whatsapp} /></a>
                <Button className={styles.contactar} onClick={onSubmit}>Contactar</Button>
                <Toaster />
            </div>
        </DivContainer>
    )
}