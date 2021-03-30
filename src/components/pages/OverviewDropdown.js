import React from 'react'
import { Select } from 'antd'
import { getYear } from '../../functions/dateFromatters'


const OverviewDropdown = ({ type, data }) => {

    const { Option } = Select

    // TODO implement dropdown scrollbar
    
    if (type === "year") {
        return (
            <div>
                <Select>
                    
                </Select>
            </div>
        )
    }

}

export default OverviewDropdown