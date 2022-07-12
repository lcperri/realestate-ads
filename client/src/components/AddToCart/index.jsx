import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import LoginController from '../../localStorage/login'
import { addToUserCart, updateCurrentPage } from '../../redux/actions'
import toast, { Toaster } from 'react-hot-toast';
import Shopping from '../../dumb/Icons/Shopping'
import styled from "styled-components"

const AddToCart = ({ idProperty, user, top, right, left, hover }) => {
    const dispatch = useDispatch()
    const headers = LoginController()

    const [inCart, setIncart] = useState(false)

    useEffect(() => {
        user && user.cart?.includes(idProperty) ? setIncart(true) : setIncart(false)
    }, [])

    const onClick = (userId, idProperty) => {
        if (inCart) {
            toast.success('Se ha quitado de tu carrito.',
            {
                style: {
                    padding: '10px',
                    borderRadius: '20px',
                },
            })
            setIncart(false)
        } else {
            toast.success('¡Se ha añadido a tu carrito!',
            {
                style: {
                    padding: '10px',
                    borderRadius: '20px',
                },
            })
            setIncart(true)
        }
        dispatch(addToUserCart(userId, { property: idProperty }, headers))
        dispatch(updateCurrentPage())
    }

    return (
        <Btn key={idProperty} onClick={() => onClick(user._id, idProperty)} top={top} right={right}>
            <Shopping fill={inCart ? 'green' : '#333'} hover={hover}  />
            <Toaster />
        </Btn>
    )
}

export default AddToCart

const Btn = styled.button`
    position: relative;
    top: ${props => props.top};
    right: ${props => props.right};
    background-color: transparent;
    border:none;
`