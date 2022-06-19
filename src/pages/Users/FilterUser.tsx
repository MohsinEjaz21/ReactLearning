import { Redux } from '@redux/store';
import { FilterForm } from '@src/components/FilterModal';
import { IColumns, IFilterForm } from '@src/interfaces';
import { Button, Modal } from 'antd';
import React from 'react';
import { useForm } from 'react-hook-form';

export const FilterUser = ({ props: { handleFilterSubmit, handleFilterCancel } }) => {
  const hookForm = useForm<IFilterForm>();

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
    hookForm.handleSubmit(data)
  }

  const { isFilterModalOpen } = Redux.DataGridSlice.state()
  const filterModalActions = [
    <Button key="back" onClick={handleFilterCancel}>
      Cancel
    </Button>,
    <Button key="submit" type="primary" loading={false} onClick={hookForm.handleSubmit(handleSubmit)}>
      Submit
    </Button>
  ];

  return (
    // <Form onFinish={hookForm.handleSubmit(data => console.log(data))} >
    <Modal title="Filter User" visible={isFilterModalOpen} footer={filterModalActions}>
      {/* onSubmit={handleFilterSubmit} */}
      <FilterForm options={options} hookForm={hookForm} />
    </Modal>
    // </Form>
  );
};


// HookFormForm
// { control, register, getValues, handleSubmit, setValue, formState: { errors } }
