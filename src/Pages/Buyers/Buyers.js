import React from 'react'
import s from './Buyers.module.sass'
import BuyersTable from '../../Components/BuyersTable/BuyersTable';

const Buyers = () => {


    const [buyers, setBuyers] = React.useState([
        {id: 1, name: 'Yaroslav', averageCheck: 3000, buyCount: 2, profit: 6000},
        {id: 2, name: 'Nikita', averageCheck: 4000, buyCount: 21, profit: 60500},
        {id: 3, name: 'Nikita', averageCheck: 2000, buyCount: 23, profit: 60200},
        {id: 4, name: 'Yaroslav', averageCheck: 3000, buyCount: 12, profit: 61000},
        {id: 5, name: 'Dima', averageCheck: 1000, buyCount: 25, profit: 1000},
        {id: 6, name: 'Alexey', averageCheck: 3000, buyCount: 12, profit: 3000},
        {id: 7, name: 'Dima', averageCheck: 5000, buyCount: 32, profit: 23000},
        {id: 8, name: 'Yaroslav', averageCheck: 3600, buyCount: 2, profit: 31000},
        {id: 9, name: 'Sveta', averageCheck: 3030, buyCount: 25, profit: 65000},
        {id: 10, name: 'Sergey', averageCheck: 3200, buyCount: 42, profit: 43000},
        {id: 11, name: 'Alex', averageCheck: 1200, buyCount: 26, profit: 87000},
        {id: 12, name: 'Mars', averageCheck: 3300, buyCount: 21, profit: 46000},
        {id: 13, name: 'Nick', averageCheck: 5000, buyCount: 22, profit: 56000},
        {id: 14, name: 'John', averageCheck: 2300, buyCount: 32, profit: 64000},
        {id: 15, name: 'Jeck', averageCheck: 12000, buyCount: 52, profit: 63000},
    ])


    return (
        <div className = {s.buyers}>
            <BuyersTable buyers = {buyers} setBuyers = {setBuyers}/>
        </div>
    )
}

export default Buyers
