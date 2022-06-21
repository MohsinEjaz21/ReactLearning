import { Redux } from '@redux/store';
import { AntdDatePicker } from '@src/components/AntdReusables';
import { Button, Form, Modal } from 'antd';
import React from 'react';

export const UserForm = ({ props: { handleAddEditSubmit, handleAddEditCancel } }) => {
  const { isAddModalOpen } = Redux.DataGridSlice.state()
  const addFormRef = Form.useForm()[0];

  const addFormFields = {
    dob: {
      span: 24,
      label: "Date Of Birth",
      placeholder: "Enter value",
      controlName: "dob",
      rules: [
        {
          required: true,
          message: "Please enter date of birth",
        },
      ],
    }
  }

  const handleOnAddEditSubmit = () => {
    addFormRef.submit();
    handleAddEditSubmit(addFormRef.getFieldsValue());
  }

  const addEditFormFooterActions = [
    <Button type="default" htmlType="button" onClick={handleAddEditCancel} >
      Cancel
    </Button>,
    <Button type="primary" htmlType="submit" onClick={handleOnAddEditSubmit} >
      Submit
    </Button>
  ];

  return (
    <>
      <Form form={addFormRef}>
        {JSON.stringify(addFormRef.getFieldsValue(), null, 2)}
        <Modal title="Add User" visible={isAddModalOpen} footer={addEditFormFooterActions}>
          <AntdDatePicker {...addFormFields.dob} />
        </Modal>
      </Form>
    </>
  );
};

