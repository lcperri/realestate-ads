import React from 'react'
import styles from './styles.module.css'
import Button from '../../styledComponents/Button'
import StyledCard from '../../styledComponents/StyledCard'

export default function UserCard({id, name, lastName, birthday, email, dni, telephone, avatar}){

    
    return(
       <StyledCard>
      
        <div className={styles.items}>
           <img src={avatar} />
        </div>                
       
        <h1 className={styles.nomb}>{name} {lastName}</h1>
        <h1 className={styles.datos}>{email}</h1>
        <h1 className={styles.datos}>{dni}</h1>
        <h1 className={styles.datos}> {telephone}</h1>
        <h1 className={styles.datos}>{birthday}</h1>

        <div className={styles.datos}>
          <Button>Eliminar</Button>
        </div>

      </StyledCard>
    )
}