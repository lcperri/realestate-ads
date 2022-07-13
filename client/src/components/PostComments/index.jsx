import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { addComments, getPropertyById, getUserById, propertyPagination } from '../../redux/actions';
import { DivColumn } from '../../styledComponents/DivColumn'
import Button from '../../styledComponents/Button';
import { Input } from '../../styledComponents/StyledFormElements';
import { useParams } from 'react-router-dom';
import LoginController from '../../localStorage/login' 

const PostComments = () => {

    const headers = LoginController()
    const userId = localStorage.getItem('id')
    const user = useSelector(state => state.user)

    const [input, setInput] = useState({
        sender: '',
        content: '',
        stars: null
    })
    const { idProperty } = useParams()
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getUserById(userId))
    }, [])

    useEffect(() => {
        setInput({
            ...input,
            sender: `${user.name} ${user.lastname}`
        })
    }, [user])


    const handleOnChange = (e) => {
        setInput({
            ...input,
            [e.target.value]: e.target.value
        })
    }

    const sendComments = () => {
        dispatch(addComments(input, idProperty, headers))
    }

    // dispatch(addComents(input, idProperty))  
    return (
        <DivColumn gap='14px'>
            <h2> Valoramos tu opinión:</h2>
            <input name='stars' type='number' value={input.stars} />
            <textarea name='content' value={Input.comments} onChange={handleOnChange} />
            <Button onClick={() => sendComments()}>Enviar</Button>
        </DivColumn>
    )
}

export default PostComments