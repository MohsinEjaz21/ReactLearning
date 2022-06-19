import { Redux } from '@redux/store';
import { FilterForm } from '@src/components/FilterModal';
import { IColumns } from '@src/interfaces';
import { Modal } from 'antd';
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
          children: [
            {
              datatype: 'string',
              componentType: 'textarea',
              value: 'xihu',
              label: 'West Lake',
            },
          ],
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

  function handleSubmit(user) {
    console.log("user", user)
  }

  const { isFilterModalOpen } = Redux.DataGridSlice.state()
  return (
    <>
      <Modal title="Filter User" visible={isFilterModalOpen} onOk={handleFilterSubmit} onCancel={handleFilterCancel}>
        <FilterForm options={options} onSubmit={handleFilterSubmit} />
      </Modal>
    </>
  );
};

