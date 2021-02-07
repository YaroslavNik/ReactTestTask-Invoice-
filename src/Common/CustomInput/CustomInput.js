import React, { useEffect } from 'react'
import s from './CustomInput.module.sass'

const CustomInput = ({type, name, className, value, defaultValue, placeholder, changeHandler, style, resetValue}) => {

    const refInput = React.useRef(null)

    useEffect(() => {
        refInput.current.value = ''
        refInput.current.blur()
    }, [resetValue])

    return (
        <input 
            ref = {refInput}
            type = {type} 
            name = {name} 
            defaultValue = {defaultValue}
            placeholder = {placeholder}
            className = {`${s.customInput} ${className}`}
            onChange = {changeHandler}
            style = {style}
        />
    )
}

export default CustomInput
