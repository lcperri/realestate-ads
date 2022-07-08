import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoginController from '../../localStorage/login'
import { addToUserFavourites, getUserById } from '../../redux/actions'
import { Heart } from '../Icons/Heart'


const SetToFavortie = ({ idProperty, userId }) => {
    const dispatch = useDispatch()
    const headers = LoginController()
    const user = useSelector(state => state.user)

    const [fav, setFav] = useState(false)

    useEffect(()=>{
        dispatch(getUserById(userId))
    }, [])

    useEffect(() => {
        userId &&
        user.favourites?.includes(idProperty) ? setFav(true) : setFav(false)
    }, [user])

    const setFavourite = (userId, idProperty) => {
        dispatch(addToUserFavourites(userId, { property: idProperty }, headers))
    }

    return (
        <button key={idProperty} onClick={() => setFavourite(userId, idProperty)}>
            <Heart width='28' height='28' fill={fav ? 'red' : 'white'} onHover='red' />
        </button>
    )
}

export default SetToFavortie