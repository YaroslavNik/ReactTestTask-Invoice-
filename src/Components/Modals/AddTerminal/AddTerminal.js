import React, { useState } from 'react'
import s from './AddTerminal.module.sass'
import CustomInput from '../../../Common/CustomInput/CustomInput';
import ButtonAddTerminal from '../../../Common/CustomButtons/ButtonAddTerminal';

const styleInput = {
    borderColor: 'red'
}

const AddTerminal = ({setTerminals}) => {

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [resetValues, setResetValues] = useState(0)

    const submitHandler = e => {
        e.preventDefault()

        if(name && desc){
            setTerminals(prev => [...prev, {title: name, description: desc, id: Date.now()}])
            setResetValues(prev => prev + 1)
        } else alert('Введены не все данные')
    }

    return (
        <form className = {s.addTerminalModal} onSubmit = {submitHandler}>
            <CustomInput resetValue = {resetValues} type = 'text' placeholder = 'Введите название терминала' changeHandler = {e => setName(e.currentTarget.value)} style = {styleInput}/>
            <CustomInput resetValue = {resetValues} type = 'text' placeholder = 'Введите описание терминала' changeHandler = {e => setDesc(e.currentTarget.value)} style = {styleInput}/>
            <ButtonAddTerminal type = 'submit' value = 'Добавить'/>
        </form>
    )
}

export default AddTerminal
