import React from 'react'
import s from './BuyersTable.module.sass'

const BuyersTableItem = ({buyer}) => {
    return (
        <tr className = {s.buyersTableItem}>
            <td>{buyer.id}</td>
            <td>{buyer.name}</td>
            <td>{buyer.averageCheck}</td>
            <td>{buyer.buyCount}</td>
            <td>{buyer.profit}</td>
        </tr>
    )
}

export default BuyersTableItem
