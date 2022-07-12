import { Redux } from "@redux/store";

export function UserActionAddEdit({ addFormRef }) {
  const { openAddDialog, closeAddDialog } = Redux.DataGridSlice.actions

  function onClickEdit(payload) {
    console.log(payload)
    openAddDialog()
  }
  function onClickAdd() {
    openAddDialog()
  }
  function handleAddEditCancel() {
    closeAddDialog()
  }
  function handleAddEditSubmit() {
    console.log("ADDFORM VALUES", addFormRef.getFieldsValue())
    closeAddDialog()
  }

  return {
    onClickEdit,
    onClickAdd,
    handleAddEditCancel,
    handleAddEditSubmit
  }
}