import React, { useEffect, useState } from 'react'
import { GrupoInput, Label, Input, ValidationIcon, ErrorLeyend } from '../../styledComponents/StyledFormElements'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import capitalize from '../../functions/capitalize'

const InputComponent = ({ className, type, min, max, name, placeHolder, regExp, errorLeyend, state, setState, funcion }) => {

  const handleOnChange = (e) => {
    //Replaces: Quita multiples espacios y ceros al inicio:
    setState({
      ...state,
      key: e.target.value.replace(/^0+/, '').replace(/\s\s+/g, ' ')
    })
  }

  const validate = (e) => {
    //Si se presiona space al inicio lo invalida:
    if (e.keyCode === 32 && state.key.length <= 1) {
      return setState({ ...state, key: '' })
    }

    //check min max value:
    if (min || max) {
      if (parseInt(e.target.value) < parseInt(min) || parseInt(e.target.value) > parseInt(max)) {
        return setState({ ...state, valid: 'false' })
      }
    }

    if (state.key.length === 0 ) {
      return setState({ ...state, valid: null})
    }
    
    //valid true o false para que sea enviado por props al css que va a mostrar u ocultar los elementos de error:
    if (regExp) {
      if (regExp.test(state.key)) {
        setState({ ...state, valid: 'true'})
      } else {
        setState({ ...state, valid: 'false'})
      }
    }

    //ejecutamos funcion que va a comparar fecha creac con renovation:
    funcion && funcion()
  }

  return (
    <div className="group">
      <Label className='controlLabel' valid={state.valid} htmlFor={name}>{name}</Label>
      <GrupoInput className={className} >
        <Input
          name={name}
          type={type || 'text'}
          min={min}
          max={max}
          placeholder={placeHolder}
          value={state.key}
          onChange={handleOnChange}
          onKeyUp={validate}
          onBlur={validate}
          valid={state.valid}
        />
        <ValidationIcon icon={state.valid === 'true' ? faCircleCheck : faCircleXmark} valid={state.valid} />
      </GrupoInput>
      <ErrorLeyend valid={state.valid}>{errorLeyend}</ErrorLeyend>
    </div>
  )
}

export default InputComponent