import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../styledComponents/Button'
const BackButton = ({top, right, left, bgColor, color, position}) => {
    const navigate = useNavigate()

    return (
        <Button
            className="btnBackTopDetail"
            top={top}
            left={left}
            right={right}
            bgColor={bgColor}
            color={color}
            position={position}
            onClick={() => {
                navigate(-1, { replace: true })
            }}
        >
            {"<"}
        </Button>
    )
}

export default BackButton