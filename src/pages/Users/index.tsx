import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { IFilterForm } from '@interfaces/IFilterForm';
import { IUserTemp } from '@interfaces/IUserEntity';
import { Redux } from '@redux/store';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { DeleteModal } from '@src/components/modals/DeleteModal';
import { FilterModal } from '@src/components/modals/FilterModal';
import { UtilsNotification } from '@src/helpers/utils/utils-notification';
import { Button, Form, FormInstance, Space } from 'antd';
import moment from 'moment';
import { useEffect } from 'react';
import { BsFunnel } from 'react-icons/bs';
import { IoAddOutline } from 'react-icons/io5';
import { UserForm } from './UserForm';
import { UsersList } from './UserList';
import { UserMeta } from './UserMeta';

const Index = () => {
  const { openDeleteDialog, closeDeleteDialog } = Redux.DataGridSlice.actions
  const { openFilterDialog, closeFilterDialog } = Redux.DataGridSlice.actions
  const { openAddDialog, closeAddDialog } = Redux.DataGridSlice.actions
  const { isDeleteDialogOpen, isFilterModalOpen } = Redux.DataGridSlice.state()
  const { entityState: state } = Redux.DataGridSlice.state()
  const setState: ActionCreatorWithPayload<IUserTemp, string> = Redux.DataGridSlice.actions.setEntityState;

  useEffect(() => {
    setState({
      filterFormRef: Form.useForm()[0],
      addFormRef: Form.useForm()[0],
    })
    return () => { }
  }, [])


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
    console.log("ADDFORM VALUES", state.addFormRef?.getFieldsValue())
    closeAddDialog()
  }

  // FILTER OPERATION

  function onClickFilter() {
    openFilterDialog()
  }
  function handleFilterSubmit(response: IFilterForm) {
    console.log(response)
    // check response object matches inside tags array
    normalizePayload(response);
    const isTagExistAlready = isTagExactMatchWithAlreadyAdded(response)
    if (isTagExistAlready) {
      UtilsNotification.filterTagExactlyMatch(response)
      return;
    }
    const tags = [...state.tags, response]
    setState({ tags })
    closeFilterDialog()
  }

  function isTagExactMatchWithAlreadyAdded(response: IFilterForm) {
    return state.tags.filter(tag => (
      tag.column === response.column
      && tag.value === response.value
      && tag.operator === response.operator)?.[0])
  }

  function handleFilterCancel(filterFormRef: FormInstance) {
    filterFormRef.resetFields();
    closeFilterDialog()
  }

  // DELETE OPERATION

  function onClickDelete(payload) {
    setState({ deleteUser: payload })
    openDeleteDialog()
  }
  function handleDeleteCancel() {
    setState({ deleteUser: undefined });
    closeDeleteDialog();
  }
  function handleDeleteSubmit(payload) {
    const key = state.deleteUser?.key;
    closeDeleteDialog();
    if (key) {
      const users = state.users.filter(user => user.key !== key);
      setState({ users });
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
    <Button key="back" onClick={() => handleFilterCancel(state.filterFormRef)}>
      Cancel
    </Button>,
    <Button key="clear" onClick={() => handleResetFilterForm(state.filterFormRef)}>
      Clear
    </Button>,
    <Button type="primary" htmlType="submit" onClick={() => { state.filterFormRef.submit() }} >
      Submit
    </Button>
  ];

  const addEditFooterActions = [
    <Button type="default" htmlType="button" onClick={handleAddEditCancel} >
      Cancel
    </Button>,
    <Button type="primary" htmlType="submit" onClick={() => state.addFormRef.submit()} >
      Submit
    </Button>
  ];


  const columns = UserMeta.getUserEntityColumns(tuppleAcion)
  const { addFormRef, filterFormRef, entityName, users, tags } = state
  return (
    <>
      <UsersList props={{ users, columns, headerActions, tags, setState }} />
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
