import React from 'react'
import s from './CustomButtons.module.sass'

const ButtonAddTerminal = ({type, value}) => {
    return (
        <button className={`${s.buttonAdd} ${s.button}`}>{value}</button>
    )
}

export default ButtonAddTerminal
