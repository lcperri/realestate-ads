import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { addComments, getPropertyById, getUserById, propertyPagination } from '../../redux/actions';
import { DivColumn } from '../../styledComponents/DivColumn'
import Button from '../../styledComponents/Button';
import { Input } from '../../styledComponents/StyledFormElements';
import { useParams } from 'react-router-dom';
import LoginController from '../../localStorage/login' 
import capitalize from '../../functions/capitalize';

const PostComments = () => {
    const headers = LoginController()
    const userId = localStorage.getItem('id')
    const user = useSelector(state => state.user)

    const [input, setInput] = useState({
        sender: '',
        content: '',
        stars: 0
    })
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserById(userId))
    }, [])

    useEffect(() => {
        setInput({
            ...input,
            sender: `${user.name}`
        })
    }, [user])


    const handleOnChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const sendComments = () => {
        dispatch(addComments(input, id, headers))
    }

    // dispatch(addComents(input, idProperty))  
    return (
        <DivColumn gap='14px' alignIt='flex-start'>
            <h2>{capitalize(user.name)} Valoramos tu opinión:</h2>
            Puntuación: <input name='stars' value={input.stars} onChange={handleOnChange}/>
            Comentario: <textarea name='content' value={input.content} onChange={handleOnChange}/>
            <Button onClick={() => sendComments()}>Enviar</Button>
        </DivColumn>
    )
}

export default PostComments