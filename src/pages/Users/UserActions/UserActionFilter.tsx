import { Redux } from "@redux/store";

export function UserActionFilter({ filterFormRef, apiResponse, setOptionsForFilters }) {
  const { openFilterDialog, closeFilterDialog } = Redux.DataGridSlice.actions

  function handleColumnChange(selectedOption) {
    switch (selectedOption?.value) {
      case 'roles':
        setOptionsForFilters(apiResponse['roles']);
        return
      default:
        setOptionsForFilters([])
        return
    }
  }

  const applyFilters = (query) => {
    console.log("query :: ", query)
  }

  function onClickFilter() {
    openFilterDialog()
  }

  function handleFilterCancel() {
    filterFormRef.resetFields();
    closeFilterDialog()
  }

  function handleResetFilterForm() {
    filterFormRef.resetFields();
  }

  return {
    handleColumnChange,
    applyFilters,
    onClickFilter,
    handleFilterCancel,
    handleResetFilterForm
  }

}