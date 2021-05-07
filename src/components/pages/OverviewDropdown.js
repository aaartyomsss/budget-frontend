import React from 'react'
import { Select } from 'antd'
import { getAllYears } from '../../functions/overviewDropdown'
import { useSelector } from 'react-redux'


const OverviewDropdown = ({ type, setYear }) => {

    const { Option } = Select
    const personalExpenses = useSelector(state => state.personalExpenses)

    const years = getAllYears(personalExpenses)
    
    const onChange = value => {
        setYear(value)
    }
    
    if (type === "year") {
        return (
            <div>
                <Select
                    style={{ width: "100%" }}
                    onChange={onChange}
                    defaultValue={years[0]}
                >
                    {years.map(year => {
                        return <Option key={year} value={year}>{year}</Option>
                    })}
                </Select>
            </div>
        )
    }

}

export default OverviewDropdown