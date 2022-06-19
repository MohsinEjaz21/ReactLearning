import { Redux } from '@redux/store';
import { FilterForm } from '@src/components/FilterModal';
import { IColumns } from '@src/interfaces';
import { Button, Form, Modal } from 'antd';
import React from 'react';

export const FilterUser = ({ props: { handleFilterSubmit, handleFilterCancel } }) => {

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

  function handleSubmit(data) {
    console.log(data)
  }

  const { isFilterModalOpen } = Redux.DataGridSlice.state()
  const filterModalActions = [
    <Button key="back" onClick={handleFilterCancel}>
      Cancel
    </Button>,
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  ];

  return (
    <Form.Provider onFormFinish={handleSubmit}  >
      <Modal title="Filter User" visible={isFilterModalOpen} footer={filterModalActions}>
        <FilterForm options={options} />
      </Modal>
    </Form.Provider>
  );
};


// HookFormForm
// { control, register, getValues, handleSubmit, setValue, formState: { errors } }
