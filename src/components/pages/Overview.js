import React, { useState } from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'
import { filterPerMonth } from '../../functions/helperFunctions'
import './Overview.css'
import OverviewFilterNavbar from './OverviewFilterNavbar'
import OverviewDropdown from './OverviewDropdown'


// Following component represents component that will display
// Graph of spendings vs graph of incomes
// With specified filters
const Overview = ({ expenses }) => {
    
    // Display month or year
    const [ filter, setFilter ] = useState("year")
    const [ selectedYear, setYear ] = useState("")

    // all the data
    const personalExpenses = filterPerMonth(expenses)
    console.log(personalExpenses)
    
    // TODO style component, implement proper positioning and create a separate logic for displaying per year or month overview

    return (
        <div>
            <OverviewFilterNavbar filter={filter} setFilter={setFilter}/>
            <OverviewDropdown type={filter} setYear={setYear} />
            <BarChart width={750} height={250} data={personalExpenses}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='month'/>
                <YAxis />
                <Bar dataKey='value' />
            </BarChart>
        </div>
    )

}

export default Overview