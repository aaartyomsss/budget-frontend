import React from 'react'
import { Select } from 'antd'
import { getAllYears } from '../../functions/overviewDropdown'
import { useSelector } from 'react-redux'


const OverviewDropdown = ({ type, setYear, value }) => {

    const { Option } = Select
    const personalExpenses = useSelector(state => state.personalExpenses)

    const years = getAllYears(personalExpenses)
    
    const onChange = value => {
        setYear(value)
    }

    // TODO handle month change
    
    if (type === "year") {
        return (
            <div>
                <Select
                    style={{ width: "100%" }}
                    onChange={onChange}
                    value={value}
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
                    onChange={onChange}
                    value={value}
                >
                    {years.map(year => {
                        return <Option key={year} value={year}>{year}</Option>
                    })}
                </Select>
                <Select
                    style={{ width: "50%" }}
                    onChange={onChange}
                    value={value}
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