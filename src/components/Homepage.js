import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Typography, Divider, Row, Col } from 'antd'
import '../styles.css'

const Homepage = () => {

    const { Title } = Typography

    return (
        <div className='center-div border text-align-center homepage'>
            <Typography>
                <Title>Budget App</Title>
                <Title type='secondary' level={4}>Simple money management solution</Title>
            </Typography>
            <Divider></Divider>
            <div style={{padding: 'auto', margin: '0 4em'}}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Button type='primary' block={true}>
                            <Link to='/login'>
                                Login
                            </Link>
                        </Button>
                    </Col>
                    <Col span={12}>
                        <Button type='primary' block={true}>
                            <Link to='/sign-up'>
                                Sing Up
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </div>
        </div>
    )

} 

export default Homepage