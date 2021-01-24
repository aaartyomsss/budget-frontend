import React from 'react'
import { Button, Layout, Menu } from 'antd'
import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterExpensesReducer'
import { useHistory } from 'react-router-dom'

 
const PlanHeader = ({ title }) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const { Sider } = Layout

    return (
        <Sider>
            <Menu 
                style={{ height: '100% '}}
            >  
                <Menu.Item>
                    <Button key='1' onClick={() => history.push('/spending-form')}>Add expense</Button>
                </Menu.Item>

                <Menu.Item>
                    <Button key='2' onClick={() => dispatch(setFilter('EXPENSIVE'))} htmlType='button'>Sort expensive</Button>
                </Menu.Item>

                <Menu.Item>
                    <Button key='3' onClick={() => dispatch(setFilter('CHEAPEST'))} htmlType='button'>Sort cheapest</Button>
                </Menu.Item>

                <Menu.Item>
                    <Button key='4' onClick={() => dispatch(setFilter('OLD'))} htmlType='button'>Oldest</Button>
                </Menu.Item>

                <Menu.Item>
                    <Button key='5' onClick={() => dispatch(setFilter('RECENT'))} htmlType='button'>Recent</Button>
                </Menu.Item>
            </Menu>
        </Sider>
    )

}

export default PlanHeader