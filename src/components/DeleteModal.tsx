import { Button, Modal } from 'antd';
import React from 'react';

export const DeleteModal = ({ props: { handleDeleteSubmit, handleDeleteCancel, isDeleteDialogOpen, entityName } }) => {

  const deleteFooterActions = [
    <Button key="back" onClick={handleDeleteCancel}>
      Cancel
    </Button>,
    <Button type={"danger" as any} htmlType="submit" onClick={handleDeleteSubmit} >
      Submit
    </Button>
  ];

  return (
    <>
      <Modal title={`Delete ${entityName}`} visible={isDeleteDialogOpen} footer={deleteFooterActions} onCancel={handleDeleteCancel}>
        <p>Are you sure to delete this {entityName} ?</p>
      </Modal>
    </>
  );
};

