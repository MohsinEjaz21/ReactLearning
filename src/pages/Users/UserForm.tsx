import { Redux } from '@redux/store';
import { AntdDatePicker, AntdRadio, AntdSwitch } from '@src/components/widgets/AntdWidgets';
import { Form, Modal } from 'antd';
import React from 'react';

export const UserForm = ({ props: { handleAddEditSubmit, addFormRef, addEditFooterActions } }) => {
  const { isAddModalOpen } = Redux.DataGridSlice.state()


  const addFormFields = {
    role: {
      controlName: 'role',
      label: 'Role',
      type: 'button',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
      ],
      value: 'user',
      onChange: (e) => {
        setValue('role', e.target.value);
      }
    },
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
      span: 24, labelCol: 24, wrapperCol: 24,
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
          <AntdSwitch {...addFormFields.isMarried} />
          {/* <AntdRadio {...addFormFields.role} /> */}
          <AntdRadio {...addFormFields.role} />
        </Modal>
      </Form>
    </>
  );
};

{/* {JSON.stringify(addFormRef.getFieldsValue(), null, 2)} */ }

{/* <AntdCheckbox {...addFormFields.isMarried} /> */ }
