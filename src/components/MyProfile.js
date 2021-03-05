import React from 'react'
import { Card, Popover } from 'antd'
import { RedoOutlined } from '@ant-design/icons'
import ChangePassword from './ChangePassword'


// TODO component that should provide some features like
// Changing password, general information, and some other functions would be added further on
const MyProfile = ({ user }) => {
    
    const { Meta } = Card
    // Organize popover

    // 

    return( 
        <Card
            actions={[
                <Popover
                    trigger='click'
                    title='Change password'
                    content={<ChangePassword type='loggedIn' username={user.username}/>}
                >
                    <RedoOutlined />
                </Popover>
            ]}
        >
            <Meta
                title={user.name}
                description={`username: ${user.username}`}
            />
        </Card>
    )

}

export default MyProfile