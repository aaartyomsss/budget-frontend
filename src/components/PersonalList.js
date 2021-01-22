import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'antd'
import { dateFormatter, sortRecent, sortLatest, sortExpensive, sortCheapest } from '../functions/helperFunctions'
import AddSpendingForm from './AddSpendingForm'
import PlanHeader from './PlanHeader'
import { useDispatch } from 'react-redux'
import { removeExpense } from '../reducers/personalReducer'
import RemoveButton from './RemoveButton'
  
const PersonalList = () => {
    const dispatch = useDispatch()
    // TODO Fix filtering mechanism
    // TODO Currently something wont allow table to rerender
    const personalExpenses = useSelector(({ personalExpenses, filter }) => {
        switch (filter) {
            case 'RECENT':
                return sortRecent(personalExpenses)
            case 'OLD':
                return sortLatest(personalExpenses)
            case 'EXPENSIVE':
                return sortExpensive(personalExpenses)
            case 'CHEAPEST':
                return sortCheapest(personalExpenses)
            default:
                return personalExpenses
        }
    })

    const { Column, ColumnGroup } = Table
    
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
            {/* <PlanHeader title={'Personal plan'}/> */}
            {/* <AddSpendingForm/> */}
            <Table dataSource={personalExpenses}>
                <ColumnGroup>
                    <Column title='Title' dataIndex='title' key='title' />
                    <Column title='Spent' dataIndex='amountSpent' key='amountSpent' />
                    <Column title='Category' dataIndex='type' key='type' />
                    <Column title='Date' dataIndex='date' key='date' />
                </ColumnGroup>
                <Column
                    title='Actions'
                    key='actions'
                    render={(text, record) => (
                        <RemoveButton onClick={() => dispatch(removeExpense(record.id))}/>
                    )}
                />
            </Table>
        </div>
    )

}

export default PersonalList