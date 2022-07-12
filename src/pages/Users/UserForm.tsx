import { Redux } from '@redux/store';
import { AntdDatePicker, AntdMultiSelect, AntdRadio, AntdSwitch } from '@src/components/widgets/AntdWidgets';
import { Form, Modal } from 'antd';
import { UserMeta } from './UserMeta';

export const UserForm = ({ props: { handleAddEditSubmit, addFormRef, addEditFooterActions, apiResponse } }) => {
  const { isAddModalOpen } = Redux.DataGridSlice.state()
  const { addFormFields } = UserMeta()
  const setValue = (key, value) => {
    addFormRef.setFieldsValue({ [key]: value });
  }
  return (
    <>
      <Form form={addFormRef} onFinish={handleAddEditSubmit} >
        <Modal title="Add User" visible={isAddModalOpen} footer={addEditFooterActions}>
          <AntdDatePicker {...addFormFields.dob} />
          <AntdSwitch {...addFormFields.isMarried} />
          <AntdRadio {...addFormFields.role} options={apiResponse.roles} />
          <AntdMultiSelect {...addFormFields.role} options={apiResponse.roles}
            onChange={(e) => { setValue('role', e.target.value) }} />
        </Modal>
      </Form>
    </>
  );
};

{/* <AntdRadio {...addFormFields.role} /> */ }
{/* <AntdMultiSelect {...addFormFields.role} /> */ }
{/* {JSON.stringify(addFormRef.getFieldsValue(), null, 2)} */ }
{/* <AntdCheckbox {...addFormFields.isMarried} /> */ }
