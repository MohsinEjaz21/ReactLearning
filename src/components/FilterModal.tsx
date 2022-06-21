import { FilterForm } from '@src/components/FilterForm';
import { Modal } from 'antd';
import React from 'react';
export const FilterModal = ({ props: { handleFilterSubmit, filterFooterActions, filterFormRef, isFilterModalOpen, filterAttr } }) => {
  return (
    <Modal title="Filter User" visible={isFilterModalOpen} footer={filterFooterActions}>
      <FilterForm props={{ options: filterAttr, filterFormRef, handleFilterSubmit }} />
    </Modal>
  );
};


// HookFormForm
// { control, register, getValues, handleSubmit, setValue, formState: { errors } }
