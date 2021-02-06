import React, { useState } from 'react'
import s from './Auth.module.sass'
import CustomInput from '../../../Common/CustomInput/CustomInput';
import ButtonLogin from '../../../Common/CustomButtons/ButtonLogin';
import { appAPI } from '../../../API/API';
import { validatePassword } from './Validations';
import {useHistory} from 'react-router'

const Auth = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    
    const history = useHistory()

    const submitHandler = async e => {
        e.preventDefault()
        if(login && password) {
            if(validatePassword(password)) {
                await appAPI.getUserGit(login)
                    .then(res => {
                        localStorage.setItem('userData', JSON.stringify(res.data))
                        window.location.reload()
                    })
                    .catch(err => alert(err.response.data.message))
            } else alert('Неверный пароль')
        } else alert('Введены не все данные')
    }

    return (
        <div className = {s.wrapper}>
            <form className = {s.formAuth} onSubmit={submitHandler}>
                <CustomInput type = 'text' name = 'login' placeholder = 'Введите логин' changeHandler = {e => setLogin(e.currentTarget.value)}/>
                <CustomInput type = 'password' name = 'password' placeholder = 'Введите пароль' changeHandler = {e => setPassword(e.currentTarget.value)}/>
                <ButtonLogin type = 'submit' value = 'Войти' />
            </form>
        </div>
    )
}

export default Auth

