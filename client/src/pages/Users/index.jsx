import React, { useEffect } from "react";
import DivContainer from '../../styledComponents/DivContainer';
import styles from './styles.module.css';
import UserCard from "../../dumb/CardUser";
import {useSelector, useDispatch} from 'react-redux';
import {getAllUsers} from '../../redux/actions';
import CardsContainer from "../../styledComponents/CardsContainer";
import LoginController from "../../localStorage/login";

export default function Users(){

    const allUsers = useSelector(state => state.users);
    const dispatch = useDispatch();
    const headers = LoginController()

    useEffect(()=>{
        dispatch(getAllUsers(headers));
    },[]);

    return(
        <DivContainer className={styles.home}>
          <CardsContainer>
            {
                allUsers.length ?
                allUsers.map(u => {
                    return(
                        <div key={u.id}>
                             <UserCard id={u.id} name={u.name} lastName={u.lastName} birthday={u.birthday} email={u.email} dni={u.dni} telephone={u.telephone} avatar={u.avatar}/>
                        </div>
                    )
                }) :
                <div>Not found</div>
            }
            </CardsContainer>
        </DivContainer>
    )
}