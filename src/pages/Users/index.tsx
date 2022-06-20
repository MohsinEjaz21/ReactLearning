import { DeleteOutlined, EditOutlined, FilterOutlined } from '@ant-design/icons';
import { Redux } from '@redux/store';
import { DeleteModal } from '@src/components/DeleteModal';
import { IFilterForm, IUsers } from '@src/interfaces';
import { Button, FormInstance, Space } from 'antd';
import React, { useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import { UserFilter } from './UserFilter';
import { UserForm } from './UserForm';
import { UsersList } from './UserList';

const Index = () => {
  const { openDeleteDialog, closeDeleteDialog } = Redux.DataGridSlice.actions
  const { openFilterDialog, closeFilterDialog } = Redux.DataGridSlice.actions
  const { openAddDialog, closeAddDialog } = Redux.DataGridSlice.actions

  const { isDeleteDialogOpen, entityName } = Redux.DataGridSlice.state()

  const [users, setUsers] = React.useState<IUsers[]>([]);
  const [deleteUser, setDeleteUser] = React.useState<IUsers>();

  const [tags, setTags] = useState<IFilterForm[]>([
    { column: "Age", operator: "=", value: "20" },
    { column: "First Name", operator: "=", value: "John" }
  ]);

  // &&&&&&&&&&&&&&&&&&&&&&&&&&
  //  OnClick Operations
  // &&&&&&&&&&&&&&&&&&&&&&&&&&

  function onClickAdd() {
    openAddDialog()
  }
  function onClickFilter() {
    openFilterDialog()
  }
  function onClickEdit(payload) {
    console.log(payload)
    openAddDialog()
  }
  function onClickDelete(payload) {
    console.log(payload)
    setDeleteUser(payload);
    openDeleteDialog()
  }

  // &&&&&&&&&&&&&&&&&&&&&&&&&&
  //  OnCancel Operations
  // &&&&&&&&&&&&&&&&&&&&&&&&&&

  function handleResetFilterForm(filterFormRef: React.RefObject<FormInstance>) {
    filterFormRef.current!.resetFields();
  }

  function handleFilterCancel(filterFormRef: React.RefObject<FormInstance>) {
    filterFormRef.current!.resetFields();
    closeFilterDialog()
  }

  function handleAddEditCancel() {
    closeAddDialog()
  }

  function handleDeleteCancel() {
    setDeleteUser(undefined);
    closeDeleteDialog();
    console.log("deleteUser ::", deleteUser)
  }

  // &&&&&&&&&&&&&&&&&&&&&&&&&&
  //  OnSubmit Operations
  // &&&&&&&&&&&&&&&&&&&&&&&&&&

  function handleAddEditSubmit(payload) {
    openAddDialog()
  }

  function handleFilterSubmit(name, { values, forms }) {
    console.log("handleFilterSubmit", { name, values, forms })
    setTags([...tags, { ...values }]);
    closeFilterDialog()
  }

  function handleDeleteSubmit(payload) {
    const key = deleteUser?.key;
    closeDeleteDialog();
    if (key) {
      setUsers(users.filter(user => user.key !== key));
    }
  }
  // &&&&&&&&&&&&&&&&&&&&&&&&&&
  //  Actions JSX
  // &&&&&&&&&&&&&&&&&&&&&&&&&&

  const tuppleAcion = (_, record) => (
    <Space size="middle">
      <Button type="ghost" icon={<EditOutlined />} size="middle" shape="circle" onClick={() => onClickEdit(record)} />
      <Button type="ghost" icon={<DeleteOutlined />} size="middle" shape="circle" onClick={() => onClickDelete(record)} />
    </Space>
  )
  const headerActions = (
    <Space size="middle">
      <Button type="ghost" icon={<IoAddOutline />} onClick={onClickAdd} size="middle" shape="circle" />
      <Button type="ghost" icon={<FilterOutlined />} onClick={onClickFilter} size="middle" shape="circle" />
    </Space>
  )

  return (
    <>
      <UsersList props={{ users, setUsers, tuppleAcion, headerActions, tags }} />
      <UserForm props={{ handleAddEditSubmit, handleAddEditCancel }} />
      <UserFilter props={{ handleFilterSubmit, handleFilterCancel, handleResetFilterForm }} />
      <DeleteModal props={{ handleDeleteSubmit, handleDeleteCancel, isDeleteDialogOpen, entityName }} />
    </>
  )
}

export default Index;