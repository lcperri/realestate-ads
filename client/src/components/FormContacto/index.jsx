import React, { useEffect, useState } from "react";
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
import './toast.css'

export default function FormContacto({ tel }) {
    const [message, setMessage] = useState('Hola, he visto la propiedad y me interesa, quiero comunicarme contigo.')
    const { id } = useParams() //params solo trae id de propiedad
    const dispatch = useDispatch()

    const headers = LoginController()

    const userId = localStorage.getItem('id')
    const user = useSelector(state => state.user);

    let url = `https://wa.me/${user.telephone}?text=Me%20gustaría%20saber%20el%20precio%20de%20%20propiedad`

    const data = {
        name: user.name + user.lastName,
        email: user.email,
        message: message,
        property: id
    }

    useEffect(() => {
        dispatch(GetUserById(userId))
        return () => { dispatch(clear()) }
    }, [])

    const onSubmit = () => {
        // toast('Here is your toast.')
        dispatch(contactForm(data, headers))
        toast.success('¡Le hemos notificado al propietario que deseas comunicarte con él. Pronto recibirás noticias!',
            {
                icon: '👏',
                style: {
                    padding: '20px 20px 20px 20px',
                    borderRadius: '20px',
                    position: 'bottom-center',
                    background: '#333',
                    color: '#fff',
                },
                className: 'toast'
            }
        )
    }

    const handleOnChange = (e) => {
        setMessage(e.target.value)
        toast
    }

    return (
        <DivContainer contact={true} className={styles.contFormContacto}>

            <h1 className={styles.titulo}>Formulario de contacto</h1>
            <br></br>
            Email:
            <Input className={styles.email} type={'text'} placeholder={'Email'} value={user.email} disabled='true'></Input>
            <br></br>
            Nombres:
            <Input className={styles.nombre} type={'text'} placeholder={'Nombre'} value={capitalize(user.name + ' ' + (user.lastName))} disabled='true' />
            <br></br>cd
            Teléfono:
            <Input className={styles.tel} type={'text'} placeholder={'Telefono'} value={user.telephone} disabled='true' />
            <br></br>
            Mensaje:
            <textarea className={styles.descrip} type={'text'} placeholder={'Mensaje:'} value={message} onChange={handleOnChange} />
            <br></br>
            Solicitar fecha de visita:
            <input type='date' />
            <div className={styles.container}>
                <a href={url}><img src={imagw} className={styles.whatsapp} /></a>
                <Button className={styles.contactar} onClick={onSubmit}>Contactar</Button>
                <Toaster />
            </div>
        </DivContainer>
    )
}