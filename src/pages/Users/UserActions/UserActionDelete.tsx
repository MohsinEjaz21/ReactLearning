import { Redux } from "@redux/store";

export function UserActionDelete({ deleteUser, setDeleteUser, setApiResponse }) {
  const { openDeleteDialog, closeDeleteDialog } = Redux.DataGridSlice.actions

  function onClickDelete(payload) {
    console.log(payload)
    setDeleteUser(payload);
    openDeleteDialog()
  }

  function handleDeleteCancel() {
    setDeleteUser(undefined);
    closeDeleteDialog();
    console.log("deleteUser ::", deleteUser)
  }

  function handleDeleteSubmit() {
    const key = deleteUser?.key;
    closeDeleteDialog();
    if (key) {
      setApiResponse(meta => {
        meta.users = meta.users.filter(user => user?.key !== key)
      });
    }
  }

  return {
    onClickDelete,
    handleDeleteCancel,
    handleDeleteSubmit
  }
}
