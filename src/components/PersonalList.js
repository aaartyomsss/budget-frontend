import React from 'react'
import { useSelector } from 'react-redux'
import { Table, Space, Layout } from 'antd'
import { dateFormatter, sortRecent, sortLatest, sortExpensive, sortCheapest } from '../functions/helperFunctions'
import PlanMenu from './PlanMenu'
import { useDispatch } from 'react-redux'
import { removeExpense } from '../reducers/personalReducer'
import RemoveButton from './RemoveButton'
import ModifyButton from './ModifyButton'
import '../styles.css'
  
const PersonalList = () => {
    const dispatch = useDispatch()
    const { Column, ColumnGroup } = Table
    const { Content, Footer } = Layout

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
    
    personalExpenses.forEach((obj) => {
        
        // RegEx that will ignore already formatted dates
        const reqPattern = /[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9][0-9][0-9]/

        if (!reqPattern.test(obj.date)){
            obj.date = dateFormatter(obj.date)
        }
   
        return obj.key = obj.id
    })

    console.log(personalExpenses)

    return (
        <div>
            <Layout style={{ height: '100%'}}>
                <PlanMenu title={'Personal plan'}/>
                <Content>
                    <Table dataSource={personalExpenses}>
                        <ColumnGroup>
                            <Column title='Title' dataIndex='title' key='title' />
                            <Column title='Spent' dataIndex='amountSpent' key='amountSpent' />
                            <Column title='Category' dataIndex='type' key='type' />
                            <Column title='Date' dataIndex='date' key='date' />
                            <Column
                            title='Actions'
                            key='actions'
                            render={(text, record) => (
                                <Space size='middle'>
                                    <RemoveButton onClick={() => dispatch(removeExpense(record.id))}/>
                                    <ModifyButton expense={record}/>
                                </Space>
                            )}
                        />
                        </ColumnGroup>
                    </Table>
                </Content>
            </Layout>
            <Footer className='footer'>Created by Artjom Savin, University of Helsinki</Footer>
        </div>
    )

}

export default PersonalList