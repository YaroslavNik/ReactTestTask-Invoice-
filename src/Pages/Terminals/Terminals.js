import React, { useEffect, useState } from 'react'
import s from './Terminals.module.sass'
import AddTerminal from '../../Components/Modals/AddTerminal/AddTerminal';
import TerminalsTable from '../../Components/TerminalsTable/TerminalsTable';

const Terminals = () => {

    const [terminals, setTerminals] = useState(() =>
        localStorage.getItem('terminals') 
            ?   JSON.parse(localStorage.getItem('terminals'))
            :   []
    )

    useEffect(() => localStorage.setItem('terminals', JSON.stringify(terminals)), [terminals])

    return (
        <div className = {s.terminals}>
            <AddTerminal setTerminals = {setTerminals}/>
            <TerminalsTable terminals = {terminals} setTerminals = {setTerminals}/>
        </div>
    )
}

export default Terminals
