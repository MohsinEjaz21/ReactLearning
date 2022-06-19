import { Modal } from 'antd';
import React from 'react';

export const DeleteModal = ({ props: { handleDeleteSubmit, handleDeleteCancel, isDeleteDialogOpen, entityName } }) => {
  return (
    <>
      <Modal title={`Delete ${entityName}`} visible={isDeleteDialogOpen} onOk={handleDeleteSubmit} onCancel={handleDeleteCancel}>
        <p>Are you sure to delete this {entityName} ?</p>
      </Modal>
    </>
  );
};

