import React from 'react'
import { Form, DatePicker, Input, Button } from 'antd'
import { serverDateFormatter } from '../functions/helperFunctions'
import { useDispatch } from 'react-redux'
import { addExpense } from '../reducers/personalReducer'

const AddSpendingForm = () => {

    const dispatch = useDispatch()

    const onFinish = (fieldsValue) => {
        const values = {
            ...fieldsValue,
            'date': serverDateFormatter(fieldsValue['date'].format('DD/MM/YYYY'))
        }
        console.log(values)
        dispatch(addExpense(values))
    }

    const layout = {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 4,
          span: 16,
        },
      };

    return (
        <div style={{margin: '2em 0em'}}>
            <Form onFinish={onFinish} {...layout}>
                <Form.Item
                    label='Title'
                    name='title'
                    rules={[{required: true, message: 'This field is required'}]}
                >
                    <Input />
                </Form.Item>
                <Form.Item 
                    label='Amount spent'
                    name='amountSpent'
                    rules={[{required: true, message: 'This field is required'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label='Category'
                    name='type'
                    rules={[{required: true, message: 'This field is required'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label='Date'
                    name='date'
                >
                    <DatePicker format={'DD/MM/YYYY'}/>
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button htmlType='submit' type='primary'>Add</Button>
                </Form.Item>
            </Form>
        </div>
    )

}

export default AddSpendingForm