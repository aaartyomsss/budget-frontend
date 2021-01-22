import React from 'react'
import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const RemoveButton = ({ onClick }) => {

    return (
        <Button onClick={onClick}><DeleteOutlined /> Remove</Button>
    )

}

export default RemoveButton
