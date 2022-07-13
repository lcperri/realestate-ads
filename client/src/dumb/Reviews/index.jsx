import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { getPropertyById, getUserById, propertyPagination } from '../../redux/actions';
import { DivColumn } from '../../styledComponents/DivColumn'
import Button from '../../styledComponents/Button';
import { Input } from '../../styledComponents/StyledFormElements';

const Reviews = ({ sender, content, stars }) => {
  return (
    <DivColumn alignIt='flex-start' gap='14px'>
      <label>{sender}</label>
      <label>{stars}</label>
      <div>{content}</div>
    </DivColumn>
  )
}

export default Reviews