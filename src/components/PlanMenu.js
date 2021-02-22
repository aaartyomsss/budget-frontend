import React from 'react'
import { Button, Layout, Menu, Typography, Radio } from 'antd'
import { useHistory } from 'react-router-dom'
import '../styles.css'
import { PlusOutlined } from '@ant-design/icons'

 
const PlanHeader = ({ title }) => {

    const history = useHistory()
    const { Sider } = Layout
    const { Title } = Typography

    return (
        <Sider>
            <Menu 
                style={{ height: '100% '}}
            >  

                <Title style={{padding: '0.5em', fontSize: '2em', textAlign: 'center'}}>{title}</Title>

                <div className='sideMenuElement'>
                    <Button className='sideMenu' key='1' onClick={() => history.push('/spending-form')}><PlusOutlined />Add expense</Button>
                </div>

                <Title style={{ paddingLeft: '1.3em', fontSize: '1.5em', margin: '1em 0' }}>Filters</Title>

                <div className='sideMenuElement'>
                    <Radio.Group>
                        <Radio className='radioBtn' value='RECENT'>Recent</Radio>
                        <Radio className='radioBtn' value='OLD'>Old</Radio>
                        <Radio className='radioBtn' value='EXPENSIVE'>Expensive</Radio>
                        <Radio className='radioBtn' value='CHEAPEST'>Cheap</Radio>
                    </Radio.Group>
                </div>
            </Menu>
        </Sider>
    )

}

export default PlanHeader