import React from 'react'
import StyledText from '../../styledComponents/StyledText'
import StyledCard from '../../styledComponents/StyledCard'
import BathIcon from '../Icons/Bath'
import RoomIcon from '../Icons/Room'
import AreaIcon from '../Icons/Area'
import styles from './styles.module.css'

export default function UserCard({id, name, lastName, birthday, email, dni, telephone, avatar}){

    
    return(
       <div className={styles.contened}>
      
        <div className={styles.items}>
           <img src={avatar} />
        </div>
                
        <div>
           <h1>pepe</h1>         
        </div>
        
        <div>
          <h1 className='typeCard'>lopez</h1>
        </div>

        <div>
          <h1>dasd@dadasdas.com</h1>
        </div>

        <div>
          <h1>29979518</h1>
        </div>

        <div>
            <h1> 2281460124</h1>
        </div>

        <div>
            <h1>
               14/01/1983 hab
            </h1>          
        </div>

      </div>
    )
}