import React from 'react'
import styles from './styles.module.css'
import Button from '../../styledComponents/Button'
import {h2} from '../../styledComponents/GlobalStyles';

export default function UserCard({id, name, lastName, birthday, email, dni, telephone, avatar}){

    
    return(
       <div className={styles.contened}>
      
        <div className={styles.items}>
           <img src={avatar} />
        </div>
                
        <div>
           <h2>pepe</h2>         
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

        <div>
          <Button>Eliminar</Button>
        </div>

      </div>
    )
}