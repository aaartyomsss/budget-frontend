import React, { useState } from 'react'
import './Overview.css'
import OverviewFilterNavbar from './OverviewFilterNavbar'
import OverviewDropdown from './OverviewDropdown'
import OverviewPerYear from './OverviewPerYear'



// Following component represents component that will display
// Graph of spendings vs graph of incomes
// With specified filters
const Overview = () => {
    
    // Display month or year
    const [ filter, setFilter ] = useState("year");
    const [ selectedYear, setYear ] = useState(new Date().getFullYear());
    console.log(filter)
    return (
        <>
            <div className="outer-div">
                    <OverviewFilterNavbar filter={filter} setFilter={setFilter}/>
                    <OverviewDropdown type={filter} setYear={setYear} value={selectedYear}/>
                    {filter === 'year' ? <OverviewPerYear selectedYear={selectedYear}/> : <p>month</p>}
            </div>
        </>
    );
    
}

export default Overview