import React from 'react'
import s from './CustomButtons.module.sass'

const ButtonLogin = ({type, value}) => {
    return (
        <button type={type} className={`${s.buttonLogin} ${s.button}`}>{value}</button>
    )
}

export default ButtonLogin
