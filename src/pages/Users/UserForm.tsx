import { Redux } from '@redux/store';
import { AntdDatePicker } from '@src/components/AntdReusables';
import { Form, Modal } from 'antd';
import React from 'react';

export const UserForm = ({ props: { handleAddEditSubmit, addFormRef, addEditFooterActions } }) => {
  const { isAddModalOpen } = Redux.DataGridSlice.state()

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

  return (
    <>
      <Form form={addFormRef} onFinish={handleAddEditSubmit} >
        {JSON.stringify(addFormRef.getFieldsValue(), null, 2)}
        <Modal title="Add User" visible={isAddModalOpen} footer={addEditFooterActions}>
          <AntdDatePicker {...addFormFields.dob} />
        </Modal>
      </Form>
    </>
  );
};

