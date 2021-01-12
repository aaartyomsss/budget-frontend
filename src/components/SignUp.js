import React from 'react'
import { Form, Input, Button } from 'antd'
import loginService from '../services/loginService'
import '../styles.css'

const SignUp = () => {

    const [form] = Form.useForm()

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

    const handleSubmit = async (values) => {
        try {
            const newUser = await loginService.register(values)
            console.log(newUser)
        } catch (error) {
            console.error(error.message)
        }
        
    }

    return (
        <div className='center-div border sign-up'>
        <Form from={form} onFinish={handleSubmit} {...layout}>
            <Form.Item 
                name="username"
                label="Username"
                rules={[
                    {
                        required: true,
                        message: 'This field is required'
                    }
                ]}
            >
                <Input />
            </Form.Item>
            
            <Form.Item
                name='name'
                label='Name'
                rules={[
                    {
                        required: true,
                        message: 'This field is required'
                    }
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                name='email'
                label='E-mail'
                rules={[
                    {
                        type: 'email',
                        required: true,
                        message: "This is not a valid e-mail"
                    },
                ]}
            >
                <Input/>
            </Form.Item>

            <Form.Item
                name='password'
                label='Password'
                rules={[
                    {
                        required: true,
                        message: 'This field is required'
                    },
                    {
                        min: 6,
                        message: 'Password must be at least 6 characters long'
                    }
                ]}
                hasFeedback
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item
                name='confirm'
                label='Confirm Password'
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'This field is required'
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value){
                                return Promise.resolve()
                            }

                            return Promise.reject('Passwords do not match')
                        }
                    })
                ]}
            >
                <Input.Password/>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type='primary' htmlType='submit'>Sign Up</Button>
            </Form.Item>
        </Form>
        </div>
    )

}

export default SignUp