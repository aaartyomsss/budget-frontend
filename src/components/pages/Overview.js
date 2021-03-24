import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'
import { filterPerMonth } from '../../functions/helperFunctions'
import './Overview.css'
// Following component represents component that will display
// Graph of spendings vs graph of incomes
// With specified filters
const Overview = ({ expenses }) => {

    // all the data
    // Initially sorted by month
    console.log(expenses)
    const personalExpenses = filterPerMonth(expenses)
    console.log(personalExpenses)
    return (
        <BarChart width={750} height={250} data={personalExpenses}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='month'/>
            <YAxis />
            <Bar dataKey='spent' />
        </BarChart>
    )

}

export default Overview