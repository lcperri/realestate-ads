import React, { useEffect, useState } from 'react'
import { GrupoInput, Label, Input, ValidationIcon, ErrorLeyend, Select, Option, GrupoSelect } from '../../styledComponents/StyledFormElements'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import capitalize from '../../functions/capitalize'

const SelectComponent = ({ className, name, options, regExp, errorLeyend, state, setState }) => {
  const [persistValueInSelect, setPersistValueInSelect] = useState('')

  const handleOnChange = (e) => {
    setPersistValueInSelect(e.target.value)
    //Setea en false a valid si se selecciona la 1ra opción:
    if (e.target.value === capitalize(options[0].description)) {
      return setState({ key: '', valid: 'false'})
    }

    let i = 0
    //Busca el valor seleccionado con el correspondiente en options para que setee su propiedad value hacia key:
    while (i < options.length) {
      if (e.target.value === capitalize(options[i].description)) {
        // console.log(e.target.value, options[i].value);
        
        //Revisar no toma el valor de false, por el momento se arregla con esto:
        if(options[i].value === false)
          return setState({
            key: false,
            valid: 'true'
          })

        return options[i].value 
        ? setState({
            key: options[i].value,
            valid: 'true'
          })
        : setState({
            key: options[i].description, //Si no recibe parámetro value por defecto se asigna description.
            valid: 'true'
        })
      }
      i ++
    }
  }

  useEffect(() => {
    console.log(state);
  },[state])

  return (
    <div className="group">
      <Label valid={state.valid} htmlFor={name}>{name}</Label>
      <GrupoSelect className={className} >
        <Select 
          name={name} 
          onChange={handleOnChange}
          valid={state.valid}
        >
        {
          options.map((e, index) => <Option key={index}> {capitalize(e.description)} </Option>)
        }
      </Select>
      <ValidationIcon icon={state.valid === 'true' ? faCircleCheck : faCircleXmark} valid={state.valid}  />
      </GrupoSelect>
      <ErrorLeyend valid={state.valid}>{errorLeyend}</ErrorLeyend>
    </div>
  )
}

export default SelectComponent