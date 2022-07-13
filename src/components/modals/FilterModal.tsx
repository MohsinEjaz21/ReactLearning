import { Modal } from 'antd';
import { FilterForm } from '../widgets/FilterForm';
export const FilterModal = ({ props:
  { tags, setTags, handleColumnChange,
    optionValues,
    filterFooterActions, filterFormRef,
    isFilterModalOpen, closeFilterDialog,
    filterColumnOptions }
}) => {
  return (
    <Modal title="Filter User" visible={isFilterModalOpen} footer={filterFooterActions}>
      <FilterForm props={{ options: filterColumnOptions, optionValues, handleColumnChange, filterFormRef, tags, setTags, closeFilterDialog }} />
    </Modal>
  );
};


// HookFormForm
// { control, register, getValues, handleSubmit, setValue, formState: { errors } }
