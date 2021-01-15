import React from 'react'
import { Menu, Dropdown, Button } from 'antd'
import { Link } from 'react-router-dom'
import { DownOutlined } from '@ant-design/icons'
import Logout from './Logout'
import { UserOutlined, TeamOutlined, IdcardOutlined, EuroCircleOutlined, PieChartOutlined } from '@ant-design/icons'


const DropdownMenu = () => {

    const menu = (
        <Menu>
            <Menu.Item>
                <Link to='/profile'>
                    <IdcardOutlined/>My profile
                </Link>
            </Menu.Item>

            <Menu.Item>
                <Link to='/personal-plan'>
                    <UserOutlined/>Personal expenses
                </Link>
            </Menu.Item>

            <Menu.Item>
                <Link>
                    <TeamOutlined/>Family plan
                </Link>
            </Menu.Item>

            <Menu.Item>
                <Link>
                    <EuroCircleOutlined/>My earnings
                </Link>
            </Menu.Item>

            <Menu.Item>
                <Link>
                    <PieChartOutlined />Overview
                </Link>
            </Menu.Item>

            <Menu.Item>
                <Logout/>
            </Menu.Item>
        </Menu>
    )

    return (
        <div>
            <Dropdown overlay={menu}>
                <Button className='ant-dropdown-link' onClick={(e) => e.preventDefault()} type='default'> 
                    Menu <DownOutlined/>
                </Button>
            </Dropdown>
        </div>
    )

}

export default DropdownMenu