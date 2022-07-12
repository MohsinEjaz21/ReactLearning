import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { IFilterForm } from '@interfaces/IFilterForm';
import { IUserEntity, IUserFilterMeta } from '@interfaces/IUserEntity';
import { Redux } from '@redux/store';
import { DeleteModal } from '@src/components/modals/DeleteModal';
import { FilterModal } from '@src/components/modals/FilterModal';
import { axios } from '@src/helpers/axios';
import { Button, Form, FormInstance, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { BsFunnel } from 'react-icons/bs';
import { IoAddOutline } from 'react-icons/io5';
import { useImmer } from 'use-immer';
import { UserForm } from './UserForm';
import { UsersList } from './UserList';
import { UserMeta } from './UserMeta';
const Index = () => {
  const { openDeleteDialog, closeDeleteDialog } = Redux.DataGridSlice.actions
  const { openFilterDialog, closeFilterDialog } = Redux.DataGridSlice.actions
  const { openAddDialog, closeAddDialog } = Redux.DataGridSlice.actions
  const { isDeleteDialogOpen, isFilterModalOpen } = Redux.DataGridSlice.state()
  const { entityName } = Redux.DataGridSlice.state()

  const filterFormRef = Form.useForm()[0];
  const addFormRef = Form.useForm()[0];

  const [deleteUser, setDeleteUser] = React.useState<IUserEntity>();
  const [tags, setTags] = useState<IFilterForm[]>([]);
  const [meta, setMeta] = useImmer<IUserFilterMeta>({ roles: [], users: [], filter: { optionValues: [] } });

  const { filterUserAttributes: filterAttr } = UserMeta()

  useEffect(() => {
    axios.GET({ url: '/api/mockTable' }).then(res => {
      setMeta(meta => { meta.users = res.data })
    })
    axios.GET({ url: '/api/roles' }).then(res => {
      setMeta(meta => { meta.roles = res.data })
    });
    return () => { }
  }, [])

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
    console.log("ADDFORM VALUES", addFormRef.getFieldsValue())
    closeAddDialog()
  }
  function afterHandleColumnChange(selectedOption) {
    if (selectedOption?.value === 'roles') {
      console.log("SELECTED OPTION", selectedOption)
      setMeta(meta => { meta.filter.optionValues = meta.roles })
      return
    }
    setMeta(meta => { meta.filter.optionValues = [] })
    console.log("AFTER COLUMN CHANGE", selectedOption)
  }

  // FILTER OPERATION

  const applyFilters = (query) => {
    console.log("query :: ", query)
  }

  function onClickFilter() {
    openFilterDialog()
  }

  function handleFilterCancel(filterFormRef: FormInstance) {
    filterFormRef.resetFields();
    closeFilterDialog()
  }

  function handleResetFilterForm(filterFormRef: FormInstance) {
    filterFormRef.resetFields();
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
      setMeta(meta => {
        meta.users = meta.users.filter(user => user?.key !== key)
      });
    }
  }

  const tuppleAcion = (_, record) => (
    <Space size="small" className='tupple-actions'>
      <Button type="ghost"
        icon={<EditOutlined />}
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
        className='center-icon add-icon' type="ghost" size="middle"
        shape="circle" icon={<IoAddOutline className='add-icon' />}
        onClick={onClickAdd}
      />
      <Button
        className='center-icon filter-icon' type="ghost" size="middle"
        shape="circle" icon={<BsFunnel className='filter-icon' />}
        onClick={onClickFilter} />
    </Space>
  )

  const filterFooterActions = [
    <Button key="back" onClick={() => handleFilterCancel(filterFormRef)}>Cancel</Button>,
    <Button key="clear" onClick={() => handleResetFilterForm(filterFormRef)}>Clear</Button>,
    <Button type="primary" htmlType="submit" onClick={() => { filterFormRef.submit() }} >Submit</Button>
  ];

  const addEditFooterActions = [
    <Button type="default" htmlType="button" onClick={handleAddEditCancel} >Cancel</Button>,
    <Button type="primary" htmlType="submit" onClick={() => addFormRef.submit()} >Submit</Button>
  ];

  const columns = UserMeta().getUserEntityColumns(tuppleAcion)

  return (
    <>
      <UsersList props={{ data: meta.users, applyFilters, columns, headerActions, tags, setTags }} />
      <UserForm props={{ handleAddEditSubmit, addFormRef, addEditFooterActions }} />
      <FilterModal props={{ tags, setTags, afterHandleColumnChange, optionValues:meta.filter.optionValues, filterFooterActions, filterFormRef, isFilterModalOpen, closeFilterDialog, filterAttr }} />
      <DeleteModal props={{ handleDeleteSubmit, handleDeleteCancel, isDeleteDialogOpen, entityName }} />
    </>
  )
}

export default Index;

