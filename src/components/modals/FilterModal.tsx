import { Modal } from 'antd';
import { FilterForm } from '../widgets/FilterForm';
export const FilterModal = ({ props: { tags, setTags, filterFooterActions, filterFormRef, isFilterModalOpen, closeFilterDialog, filterAttr } }) => {
  return (
    <Modal title="Filter User" visible={isFilterModalOpen} footer={filterFooterActions}>
      <FilterForm props={{ options: filterAttr, filterFormRef, tags, setTags, closeFilterDialog }} />
    </Modal>
  );
};


// HookFormForm
// { control, register, getValues, handleSubmit, setValue, formState: { errors } }
