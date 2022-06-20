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
  const { setIsAddDialogOpen, setIsFilterModalOpen, setIsDeleteDialogOpen } = Redux.DataGridSlice.actions
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
    setIsAddDialogOpen(true);
  }
  function onClickFilter() {
    setIsFilterModalOpen(true);
  }
  function onClickEdit(payload) {
    console.log(payload)
    setIsAddDialogOpen(true);
  }
  function onClickDelete(payload) {
    console.log(payload)
    setDeleteUser(payload);
    setIsDeleteDialogOpen(true);
  }

  // &&&&&&&&&&&&&&&&&&&&&&&&&&
  //  OnCancel Operations
  // &&&&&&&&&&&&&&&&&&&&&&&&&&

  function handleResetFilterForm(filterFormRef: React.RefObject<FormInstance>) {
    filterFormRef.current!.resetFields();
  }

  function handleFilterCancel(filterFormRef: React.RefObject<FormInstance>) {
    filterFormRef.current!.resetFields();
    setIsFilterModalOpen(false);
  }

  function handleAddEditCancel() {
    setIsAddDialogOpen(false);
  }

  function handleDeleteCancel() {
    setDeleteUser(undefined);
    setIsDeleteDialogOpen(false);
    console.log("deleteUser ::", deleteUser)
  }

  // &&&&&&&&&&&&&&&&&&&&&&&&&&
  //  OnSubmit Operations
  // &&&&&&&&&&&&&&&&&&&&&&&&&&

  function handleAddEditSubmit(payload) {
    setIsAddDialogOpen(false);
  }

  function handleFilterSubmit(name, { values, forms }) {
    console.log("handleFilterSubmit", { name, values, forms })
    setTags([...tags, { ...values }]);
    setIsAddDialogOpen(false);
  }

  function handleDeleteSubmit(payload) {
    const key = deleteUser?.key;
    setIsDeleteDialogOpen(false);
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
      <Button type="ghost" icon={<IoAddOutline />} onClick={() => setIsAddDialogOpen(true)} size="middle" shape="circle" />
      <Button type="ghost" icon={<FilterOutlined />} onClick={() => setIsFilterModalOpen(true)} size="middle" shape="circle" />
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