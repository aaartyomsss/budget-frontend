import React from 'react'
import { PageHeader, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterExpensesReducer'
 
const PlanHeader = ({ title }) => {

    const dispatch = useDispatch()

    return (
        <div>
                    <Button key='1'>Add expense</Button>,
                    <Button key='2' onClick={() => dispatch(setFilter('EXPENSIVE'))} htmlType='button'>Sort expensive</Button>,
                    <Button key='3' onClick={() => dispatch(setFilter('CHEAPEST'))} htmlType='button'>Sort cheapest</Button>,
                    <Button key='4' onClick={() => dispatch(setFilter('OLD'))} htmlType='button'>Oldest</Button>,
                    <Button key='5' onClick={() => dispatch(setFilter('RECENT'))} htmlType='button'>Recent</Button>
        </div>
    )

}

export default PlanHeader