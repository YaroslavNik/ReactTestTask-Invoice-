import React, { useState } from 'react'
import s from './TerminalsTable.module.sass'
import TerminalsTableItem from './TerminalsTableItem';

const TerminalsTable = ({terminals, setTerminals}) => {


    const deleteTerminal = terminalId => setTerminals(prev => prev.filter(terminal => terminal.id !== terminalId))

    return (
        <div className = {s.terminalsTable}>
            <table>
                <thead>
                    <tr>
                        <th>Название терминала</th>
                        <th>Описание</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {terminals.map(terminal => 
                        <TerminalsTableItem 
                            terminal = {terminal}
                            deleteTerminal = {deleteTerminal}
                            key = {terminal.id}
                        />)}
                </tbody>
            </table>
        </div>
    )
}

export default TerminalsTable
