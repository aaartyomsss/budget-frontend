import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'antd'
import { dateFormatter } from '../functions/helperFunctions'
import AddSpendingForm from './AddSpendingForm'
  
const PersonalList = () => {
    let personalExpenses = useSelector(state => state.personalExpenses)
    personalExpenses.sort((a, b) => {
        const dummy1 = new Date(a.date)
        const dummy2 = new Date(b.date)
        return dummy2.getTime() - dummy1.getTime()
    })
    personalExpenses.forEach((obj) => {
        
        // RegEx that will ignore already formatted dates
        const reqPattern = /[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9][0-9][0-9]/

        if (!reqPattern.test(obj.date)){
            obj.date = dateFormatter(obj.date)
        }
   
        return obj.key = obj.id
    })

    console.log(personalExpenses)


    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Amount spent',
            dataIndex: 'amountSpent',
            key: 'amountSpent'
        },
        {
            title: 'Category',
            dataIndex: 'type',
            key: 'type'
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date'
        },
        
    ]

    return (
        <div>
            <AddSpendingForm/>
            <Table columns={columns} dataSource={personalExpenses}/>
        </div>
    )

}

export default PersonalList