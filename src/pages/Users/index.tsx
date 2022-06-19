import { DeleteOutlined, EditOutlined, FilterOutlined } from '@ant-design/icons';
import { Redux } from '@redux/store';
import { DeleteModal } from '@src/components/DeleteModal';
import { IApp } from '@src/interfaces';
import { Button, Space } from 'antd';
import React from 'react';
import { IoAddOutline } from 'react-icons/io5';
import { AddUser } from './AddUser';
import { FilterUser } from './FilterUser';
import { UsersList } from './ListUser';

const Index = () => {
  const { setIsAddDialogOpen, setIsFilterModalOpen, setIsDeleteDialogOpen } = Redux.DataGridSlice.actions
  const { isDeleteDialogOpen, entityName } = Redux.DataGridSlice.state()

  const [users, setUsers] = React.useState<IApp.Users[]>([]);
  const [deleteUser, setDeleteUser] = React.useState<IApp.Users>();

  // handle onClick Operations
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

  // handle onCancel Operations

  function handleFilterCancel() {
    setIsFilterModalOpen(false);
  }

  function handleAddEditCancel() {
    setIsAddDialogOpen(false);
  }

  function handleDeleteCancel() {
    setIsDeleteDialogOpen(false);
    setDeleteUser(undefined);
    console.log("deleteUser ::", deleteUser)
  }
  // handle onSubmit Operations

  function handleAddEditSubmit(payload) {
    setIsAddDialogOpen(false);
  }

  function handleFilterSubmit(payload) {
    console.log("filter payload ::", payload)
    setIsFilterModalOpen(true);
  }

  function handleDeleteSubmit(payload) {
    const key = deleteUser?.key;
    setIsDeleteDialogOpen(false);
    if (key) {
      setUsers(users.filter(user => user.key !== key));
    }
  }

  const tuppleAcion = (_, record) => (
    <Space size="middle">
      <Button type="ghost" icon={<EditOutlined />} size="middle" shape="circle" onClick={() => onClickEdit(record)} />
      <Button type="ghost" icon={<DeleteOutlined />} size="middle" shape="circle" onClick={() => onClickDelete(record)} />
    </Space>
  )

  return (
    <>
      <UsersList props={{ users, setUsers, tuppleAcion }} >
        <Button type="ghost" icon={<IoAddOutline />} onClick={() => setIsAddDialogOpen(true)} size="middle" shape="circle" />
        <Button type="ghost" icon={<FilterOutlined />} onClick={() => setIsFilterModalOpen(true)} size="middle" shape="circle" />
      </UsersList>
      <AddUser props={{ handleAddEditSubmit, handleAddEditCancel }} />
      <FilterUser props={{ handleFilterSubmit, handleFilterCancel }} />
      <DeleteModal props={{ handleDeleteSubmit, handleDeleteCancel, isDeleteDialogOpen, entityName }} />
    </>
  )
}

export default Index;