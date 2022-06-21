import { Redux } from '@redux/store';
import { FilterForm } from '@src/components/FilterModal';
import { IColumns } from '@src/interfaces';
import { Button, Form, Modal } from 'antd';
import React from 'react';

export const UserFilter = ({ props: { handleFilterSubmit, handleFilterCancel, handleResetFilterForm } }) => {

  const options: IColumns[] = [
    {
      value: 'Age',
      label: 'Age',
      datatype: 'number',
      componentType: 'number'
    },
    {
      value: 'dob',
      label: 'Date of Birth',
      datatype: 'date',
      componentType: 'datepicker'
    },
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          datatype: 'string',
          componentType: 'textarea',
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              componentType: 'datepicker',
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

  const filterFormRef = Form.useForm()[0];
  const { isFilterModalOpen } = Redux.DataGridSlice.state()
  const filterFooterActions = [
    <Button key="back" onClick={() => handleFilterCancel(filterFormRef)}>
      Cancel
    </Button>,
    <Button key="clear" onClick={() => handleResetFilterForm(filterFormRef)}>
      Clear
    </Button>,
    <Button type="primary" htmlType="submit" onClick={submitFilterForm} >
      Submit
    </Button>
  ];

  const setValue = (key, value) => {
    filterFormRef.setFieldsValue({ [key]: value });
  }

  function submitFilterForm() {
    filterFormRef.submit();
  }

  return (
    <Modal title="Filter User" visible={isFilterModalOpen} footer={filterFooterActions}>
      <FilterForm props={{ options, filterFormRef, setValue, handleFilterSubmit }} />
    </Modal>
  );
};


// HookFormForm
// { control, register, getValues, handleSubmit, setValue, formState: { errors } }
