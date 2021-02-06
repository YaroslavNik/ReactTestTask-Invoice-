import React from 'react'
import s from './CustomInput.module.sass'

const CustomInput = ({type, name, className, value, defaultValue, placeholder, changeHandler}) => {

    return (
        <input 
            type = {type} 
            name = {name} 
            defaultValue = {defaultValue}
            placeholder = {placeholder}
            className = {`${s.customInput} ${className}`}
            onChange = {changeHandler}
        />
    )
}

export default CustomInput
