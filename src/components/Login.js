import React from 'react'
import loginService from '../services/loginService'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/userReducer'
import { Form, Button, Input, message } from 'antd' 
import '../styles.css'
import { useHistory } from 'react-router-dom'


const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = async (values) => {
        console.log(values)
        try {
            const res = await loginService.login(values)
            window.localStorage.setItem('loggedInUser', JSON.stringify(res))
            dispatch(login(res))
            history.push('/personal-plan')
        } catch (error) {
            if(error.message === 'Request failed with status code 401'){
                message.error('Invalid credentials')
            }
        }
    }

    window.addEventListener('popstate', (event) => {
        history.push('/')
    })

    const layout = {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 16
        },
      }
      const tailFormItemLayout = {
        wrapperCol: {
          offset: 4,
          span: 16
        },
      }

    return (
        <div className='center-div border padding' style={{width: '30%'}}>
            <Form onFinish={handleSubmit} {...layout}>
                <Form.Item
                    name='username'
                    label='Username'
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input/>
                </Form.Item> 

                <Form.Item
                    name='password'
                    label='Password'
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button htmlType='submit' type='primary'>Login</Button>
                </Form.Item>
            </Form>
        </div>
    )

}

export default Login