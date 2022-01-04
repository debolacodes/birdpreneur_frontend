import React from 'react'
import Balances from '../components/Balances'
import TransactionsTable from '../components/TransactionsTable'
import PageTitle from '../components/PageTitle'
export default function Dashboard() {
    return (
        <div>
            <PageTitle title="Dashboard" />
            <div className='container'>
            <Balances />
            <TransactionsTable />
            </div>
        </div>
    )
}
