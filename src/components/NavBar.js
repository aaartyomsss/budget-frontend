import React from 'react'
import { PageHeader } from 'antd'
import Logout from './Logout'

const NavBar = ({user}) => {

    const subTitle = user === null ? '' : `Welcome ${user.name}`

    return (
        <div style={{border: "1px solid black"}}>
            <PageHeader
                title='Budget App'
                subTitle={subTitle}
                extra={[
                    user ? <Logout key='1'/> : null
                ]}
            />
        </div>
    )

}

export default NavBar