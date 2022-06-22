import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Redux } from '@redux/store';
import { DeleteModal } from '@src/components/DeleteModal';
import { IFilterForm, IUsers } from '@src/interfaces';
import { Button, Form, FormInstance, Space } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { BsFunnel } from 'react-icons/bs';
import { IoAddOutline } from 'react-icons/io5';
import { FilterModal } from '../../components/FilterModal';
import { UserForm } from './UserForm';
import { UsersList } from './UserList';
import { UserMeta } from './UserMeta';

const Index = () => {
  const { openDeleteDialog, closeDeleteDialog } = Redux.DataGridSlice.actions
  const { openFilterDialog, closeFilterDialog } = Redux.DataGridSlice.actions
  const { openAddDialog, closeAddDialog } = Redux.DataGridSlice.actions
  const { isDeleteDialogOpen, entityName } = Redux.DataGridSlice.state()
  const { isFilterModalOpen } = Redux.DataGridSlice.state()

  const filterFormRef = Form.useForm()[0];
  const addFormRef = Form.useForm()[0];

  const [users, setUsers] = React.useState<IUsers[]>([]);
  const [deleteUser, setDeleteUser] = React.useState<IUsers>();
  const [tags, setTags] = useState<IFilterForm[]>([]);

  const filterAttr = UserMeta.filterUserAttributes


  // ADD/EDIT OPERATION

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
    console.log("addFormRef values", addFormRef.getFieldsValue())
    console.log("dateOfBirth", addFormRef.getFieldValue("dob").format("YYYY-MM-DD"))
    closeAddDialog()
  }

  // FILTER OPERATION

  function onClickFilter() {
    openFilterDialog()
  }
  function handleFilterSubmit(response: IFilterForm) {
    console.log(response)
    normalizePayload(response);
    setTags([...tags, { ...response }]);
    closeFilterDialog()
  }
  function handleFilterCancel(filterFormRef: FormInstance) {
    filterFormRef.resetFields();
    closeFilterDialog()
  }

  // DELETE OPERATION

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
  function handleDeleteSubmit(payload) {
    const key = deleteUser?.key;
    closeDeleteDialog();
    if (key) {
      setUsers(users.filter(user => user.key !== key));
    }
  }

  // &&&&&&&&&&&&&&&&&&&&&&&&&&
  //  REST
  // &&&&&&&&&&&&&&&&&&&&&&&&&&

  function handleResetFilterForm(filterFormRef: FormInstance) {
    filterFormRef.resetFields();
  }

  const tuppleAcion = (_, record) => (
    <Space size="small" className='tupple-actions'>
      <Button type="ghost"
        icon={<EditOutlined stroke-width="1" />}
        size="middle" shape="circle"
        onClick={() => onClickEdit(record)} />

      <Button type="ghost"
        icon={<DeleteOutlined />}
        size="middle" shape="circle"
        onClick={() => onClickDelete(record)} />
    </Space>
  )

  const headerActions = (
    <Space size="small" className='header-actions'>
      <Button
        className='center-icon add-icon'
        type="ghost" size="middle" shape="circle"
        icon={<IoAddOutline className='add-icon' />}
        onClick={onClickAdd}
      />
      <Button
        className='center-icon filter-icon'
        type="ghost" size="middle" shape="circle"
        icon={<BsFunnel className='filter-icon' />}
        onClick={onClickFilter} />
    </Space>
  )

  const filterFooterActions = [
    <Button key="back" onClick={() => handleFilterCancel(filterFormRef)}>
      Cancel
    </Button>,
    <Button key="clear" onClick={() => handleResetFilterForm(filterFormRef)}>
      Clear
    </Button>,
    <Button type="primary" htmlType="submit" onClick={() => { filterFormRef.submit() }} >
      Submit
    </Button>
  ];

  const addEditFooterActions = [
    <Button type="default" htmlType="button" onClick={handleAddEditCancel} >
      Cancel
    </Button>,
    <Button type="primary" htmlType="submit" onClick={() => addFormRef.submit()} >
      Submit
    </Button>
  ];


  const columns = UserMeta.getUserEntityColumns(tuppleAcion)

  return (
    <>
      <UsersList props={{ users, setUsers, columns, headerActions, tags, setTags }} />
      <UserForm props={{ handleAddEditSubmit, addFormRef, addEditFooterActions }} />
      <FilterModal props={{ handleFilterSubmit, filterFooterActions, filterFormRef, isFilterModalOpen, filterAttr }} />
      <DeleteModal props={{ handleDeleteSubmit, handleDeleteCancel, isDeleteDialogOpen, entityName }} />
    </>
  )
}

export default Index;

function normalizePayload(response: IFilterForm) {
  if (response.value instanceof Date || response.value instanceof moment) {
    response.value = moment(response.value).format("YYYY-MM-DD");
  }
}