import { Redux } from '@redux/store';
import { FilterForm } from '@src/components/FilterModal';
import { Modal } from 'antd';
import React from 'react';
import { UserMeta } from './UserMeta';
export const UserFilter = ({ props: { handleFilterSubmit, filterFooterActions, filterFormRef } }) => {
  const { isFilterModalOpen } = Redux.DataGridSlice.state()
  const userProperties = UserMeta.filterProperties
  return (
    <Modal title="Filter User" visible={isFilterModalOpen} footer={filterFooterActions}>
      <FilterForm props={{ options: userProperties, filterFormRef, handleFilterSubmit }} />
    </Modal>
  );
};


// HookFormForm
// { control, register, getValues, handleSubmit, setValue, formState: { errors } }
