import React from 'react'
import s from './TerminalsTable.module.sass'

const TerminalsTableItem = ({terminal, deleteTerminal}) => {
    return (
        <tr>
            <td>{terminal.title}</td>
            <td>{terminal.description}</td>
            <td className = {s.terminalsDelete} onClick={() => deleteTerminal(terminal.id)}>&#10008;</td>
        </tr>
    )
}

export default TerminalsTableItem
