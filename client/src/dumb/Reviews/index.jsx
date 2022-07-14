import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { getPropertyById, getUserById, propertyPagination } from '../../redux/actions';
import { DivColumn } from '../../styledComponents/DivColumn'
import Button from '../../styledComponents/Button';
import { Input } from '../../styledComponents/StyledFormElements';
import capitalize from '../../functions/capitalize'

const Reviews = ({ sender, content, stars }) => {
  return (
    <DivColumn alignIt='flex-start' gap='14px' bgColor='#345' color="#fff" bRadius="20px" padding='20px' border='1px solid #fb6d5d'>
      <label><b>{capitalize(sender)}</b></label>
      <label>Puntuacion: {stars}</label>
      <div>{content}</div>
    </DivColumn>
  )
}

export default Reviews