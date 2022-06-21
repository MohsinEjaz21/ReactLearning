import { Redux } from '@redux/store';
import { FilterForm } from '@src/components/FilterModal';
import { IColumns } from '@src/interfaces';
import { Modal } from 'antd';
import React from 'react';

export const UserFilter = ({ props: { handleFilterSubmit, filterFooterActions, filterFormRef } }) => {
  const { isFilterModalOpen } = Redux.DataGridSlice.state()
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


  return (
    <Modal title="Filter User" visible={isFilterModalOpen} footer={filterFooterActions}>
      <FilterForm props={{ options, filterFormRef, handleFilterSubmit }} />
    </Modal>
  );
};


// HookFormForm
// { control, register, getValues, handleSubmit, setValue, formState: { errors } }
