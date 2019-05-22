import React, { Component } from 'react'
import { Button, Modal, Form, Input, Radio } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  class extends Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={ visible }
          title="Create a new ticket"
          okText="Create"
          onCancel={ onCancel }
          onOk={ onCreate }
        >
          <Form layout="vertical">
            <Form.Item label="Subject">
              {getFieldDecorator('subject', {
                rules: [{ required: true, message: 'Please input the subject!' }],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Description">
              {getFieldDecorator('description')(<TextArea />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

export default class CollectionsPage extends Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          New Ticket
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={ this.saveFormRef }
          visible={ this.state.visible }
          onCancel={ this.handleCancel }
          onCreate={ this.handleCreate }
        />
      </div>
    );
  }
}