import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'
import { filterPerMonth } from '../../functions/helperFunctions'
import './Overview.css'
// Following component represents component that will display
// Graph of spendings vs graph of incomes
// With specified filters
const Overview = ({ expenses }) => {

    // all the data
    const personalExpenses = filterPerMonth(expenses)
    console.log(personalExpenses)

    // TODO style component, implement proper positioning and create a separate logic for displaying per year or month overview

    return (
        <BarChart width={750} height={250} data={personalExpenses}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='month'/>
            <YAxis />
            <Bar dataKey='value' />
        </BarChart>
    )

}

export default Overview