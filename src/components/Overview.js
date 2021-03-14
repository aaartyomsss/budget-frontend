import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'
import { useSelector } from 'react-redux'
import { spentPerMonth } from '../functions/helperFunctions'
// Following component represents component that will display
// Graph of spendings vs graph of incomes
// With specified filters
const Overview = () => {

    // all the data
    // Initially sorted by month
    const personalExpenses = useSelector(state => spentPerMonth(state.personalExpenses))
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