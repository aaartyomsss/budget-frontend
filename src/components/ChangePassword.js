import React from 'react'
import userService from '../services/userService'
import { Button, Form, Input } from 'antd'
// Following component will have different logic
// depending on whether we forgot password
// or simply want to change it
// Current implementation: only logged in user is able to change password 
const ChangePassword = ({ type, username }) => {
    // TODO on finish after success form should close automatically
    const onFinish = async values => {
        console.log(values)
        const creds = {
            newPassword: values.newPassword,
            currentPassword: values.currentPassword,
            username
        }
        const res = await userService.changePassword(creds)
        try {
            console.log(res) // TODO display successful or failed messages
        } catch (error) {
            console.log(error.message)
        }
    }

    // TODO Create a form and a function that does request to the backend 
    // and changes the password
    return (
        <Form onFinish={onFinish}>
            {/* if user logged in he should enter current password */}
            {type === 'loggedIn' ? 
                <Form.Item
                    label='Current password'
                    name='currentPassword'
                    rules={[
                        {
                            required: true,
                            message: 'Please enter current password'
                        }

                    ]}
                >
                    <Input.Password/>
                </Form.Item>
                : null    
        }

            <Form.Item
                label='New password'
                name='newPassword'
                rules={[
                    {
                        required: true,
                        message: 'Please enter new password'
                    }
                ]}
            >

                <Input.Password min={6}/>

            </Form.Item>

            <Form.Item
                label='Confirm password'
                name='confirm'
                dependencies={['newPassword']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: 'Please confirm password'
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('newPassword') === value) {
                                return Promise.resolve()
                            }
                            return Promise.reject(new Error('Passwords do not match'))
                        }
                    })
                ]}
            >

                <Input.Password min={6}/>

            </Form.Item>
            <Form.Item>
                <Button htmlType='submit' type='primary'>Change Password</Button>
            </Form.Item>
        </Form>
    )

}

export default ChangePassword