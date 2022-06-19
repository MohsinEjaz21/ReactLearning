import { Redux } from '@redux/store';
import { Modal } from 'antd';
import React from 'react';

export const AddUser = ({ props: { handleAddEditSubmit, handleAddEditCancel } }) => {
  const { isAddModalOpen } = Redux.DataGridSlice.state()
  return (
    <>
      <Modal title="Add User" visible={isAddModalOpen} onOk={handleAddEditSubmit} onCancel={handleAddEditCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

