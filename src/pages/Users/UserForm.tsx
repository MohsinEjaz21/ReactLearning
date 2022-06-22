import { Redux } from '@redux/store';
import { AntdCheckbox, AntdDatePicker } from '@src/components/AntdReusables';
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
    },
    isMarried: {
      span: 24,
      label: "Is Married",
      placeholder: "Enter value",
      controlName: "isMarried",
      rules: [
        {
          required: true,
          message: "Please enter isMarried",
        },
      ],
    },
  }

  const setValue = (key, value) => {
    addFormRef.setFieldsValue({ [key]: value });
  }

  return (
    <>
      <Form form={addFormRef} onFinish={handleAddEditSubmit} >
        <Modal title="Add User" visible={isAddModalOpen} footer={addEditFooterActions}>
          <AntdDatePicker {...addFormFields.dob} />
          <AntdCheckbox {...addFormFields.isMarried} />
        </Modal>
      </Form>
    </>
  );
};

{/* {JSON.stringify(addFormRef.getFieldsValue(), null, 2)} */ }
