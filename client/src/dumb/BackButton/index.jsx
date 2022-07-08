import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../styledComponents/Button'
const BackButton = () => {
    const navigate = useNavigate()

    return (
        <Button
            className="btnBackTopDetail"
            onClick={() => {
                navigate(-1, { replace: true })
            }}
        >
            {"<"}
        </Button>
    )
}

export default BackButton