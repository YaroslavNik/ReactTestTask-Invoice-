import React, { useEffect, useState } from 'react'
import s from './BuyersTable.module.sass'
import BuyersTableItem from './BuyersTableItem'

const BuyersTable = ({buyers, setBuyers}) => {

    const [sortField, setSortField] = useState('id')
    const [prevSortField, setPrevSortField] = useState('id')
    const [sortAsc, setSortAsc] = useState(true)

    const setSortFieldFunction = field => {
        if(field === prevSortField) {
            setSortAsc(!sortAsc)
        } else {
            setSortField(field)
            setSortAsc(true)
        }
        setPrevSortField(field)
    }
    return (
        <div className = {s.buyersTable}>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => setSortFieldFunction('id')}>ID покупателя</th>
                        <th onClick={() => setSortFieldFunction('name')}>Имя покупателя</th>
                        <th onClick={() => setSortFieldFunction('averageCheck')}>Средний чек</th>
                        <th onClick={() => setSortFieldFunction('buyCount')}>Количество покупок</th>
                        <th onClick={() => setSortFieldFunction('profit')}>Общая выручка</th>
                    </tr>
                </thead>

                <tbody>
                    {buyers
                        .sort((prevVal, nextVal) => (
                            sortAsc
                                ?   prevVal[sortField] > nextVal[sortField] ? 1 : -1
                                :   prevVal[sortField] < nextVal[sortField] ? 1 : -1
                        ))
                        .map(buyer => <BuyersTableItem buyer = {buyer} key = {buyer.id}/>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default BuyersTable
