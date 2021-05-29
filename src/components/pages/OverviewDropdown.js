import React from 'react'
import { Select } from 'antd'
import { getAllMonths, getAllYears } from '../../functions/overviewDropdown'
import { useSelector } from 'react-redux'


const OverviewDropdown = ({ type, setYear, year, month, setMonth }) => {

    const { Option } = Select
    const personalExpenses = useSelector(state => state.personalExpenses)

    const years = getAllYears(personalExpenses)
    const months = getAllMonths(personalExpenses)
    
    if (type === "year") {
        return (
            <div>
                <Select
                    style={{ width: "100%" }}
                    onChange={(value) => setYear(value)}
                    value={year}
                >
                    {years.map(year => {
                        return <Option key={year} value={year}>{year}</Option>
                    })}
                </Select>
            </div>
        )
    } else {
        return (
            <div>
                <Select
                    style={{ width: "50%" }}
                    onChange={(value) => setYear(value)}
                    value={year}
                >
                    {years.map(year => {
                        return <Option key={year} value={year}>{year}</Option>
                    })}
                </Select>
                <Select
                    style={{ width: "50%" }}
                    onChange={(value) => setMonth(value)}
                    value={month}
                >
                    {months.map(month => {
                        return <Option key={month} value={month}>{month}</Option>
                    })}
                </Select>
            </div>
        )
    }

}

export default OverviewDropdown