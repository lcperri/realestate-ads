import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoginController from '../../localStorage/login'
import { addToUserFavourites, getUserById } from '../../redux/actions'
import toast, { Toaster } from 'react-hot-toast';
import { Heart } from '../../dumb/Icons/Heart'

const SetToFavortie = ({ idProperty, user }) => {
    const dispatch = useDispatch()
    const headers = LoginController()

    const [fav, setFav] = useState(false)

    useEffect(() => {
        user.favourites?.includes(idProperty) ? setFav(true) : setFav(false)
    }, [])

    const setFavourite = (userId, idProperty) => {
        if (fav) {
            toast.success('Se ha quitado de tus favoritos.',
            {
                style: {
                    padding: '10px',
                    borderRadius: '20px',
                },
            })
            setFav(false)
        } else {
            toast.success('Se ha añadido a tus favoritos!',
            {
                style: {
                    padding: '10px',
                    borderRadius: '20px',
                },
            })
            setFav(true)
        }
        dispatch(addToUserFavourites(userId, { property: idProperty }, headers))
    }

    return (
        <button key={idProperty} onClick={() => setFavourite(user._id, idProperty)}>
            <Heart width='28' height='28' fill={fav ? '#ff274e' : 'white'} onHover='#ff274e' />
            <Toaster />
        </button>
    )
}

export default SetToFavortie