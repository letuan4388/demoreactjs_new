import React, { Component } from 'react';
import './login.css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);

            this.setState({
                user: values.username
            })
            
            this.props.history.push('/');
          }
        });
      }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
        <Form onSubmit={ this.handleSubmit } className="login-form">
            <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
            </Form.Item>

            <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>Remember me</Checkbox>
                )} 
                <Button type="primary" htmlType="submit" className="login-form-button">Log in</Button>
            </Form.Item>
        </Form>
    )
  }
}

const WrappedRegistrationForm = Form.create({ name: 'normal_login' })(Login);

export default WrappedRegistrationForm;