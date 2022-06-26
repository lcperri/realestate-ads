import React, { useEffect } from "react";
import './UserCard.css'
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getAllUsers } from '../../redux/actions';

export default function UserCard(/* {id, name, lastName, birthday, email, dni, telephone, avatar} */){

    const allUsers = useSelector(state => state.users);
    const dispatch = useDispatch();
    //-------------------------
    const id_user = "62b74bb91ac8e14f67b57b87";
    let user = allUsers.find(u => u._id === id_user);
    //------------------------
    console.log("data: ", allUsers)

    useEffect(()=>{
        dispatch(getAllUsers());
    },[dispatch]);

    return(
        <div className="cont-gral">
        {
            user ? 
            (<div className="cont-pokeCard">
                <p className="user">{user.name.toUpperCase()} {user.lastName.toUpperCase()}</p>
                <img src={user.avatar} alt={"Img not found"} className={"foto"}/>       
                <p className="user">{user.birthday}</p>
                <p className="user">{user.email}</p>
                <p className="user">{user.dni}</p>
                <p className="user">{user.telephone}</p>   
            </div>) : 
            (<div><h1>Not found</h1></div>)
            
        }            
        </div>
    )
}