import { IFilterForm } from '@interfaces/IFilterForm';
import { IUserApiMeta, IUserEntity } from '@interfaces/IUserEntity';
import { Redux } from '@redux/store';
import { DeleteModal } from '@src/components/modals/DeleteModal';
import { FilterModal } from '@src/components/modals/FilterModal';
import { Form } from 'antd';
import React, { useEffect, useState } from 'react';
import { useImmer } from 'use-immer';
import { UserActionJsx } from './UserActions';
import { UserActionAddEdit } from './UserActions/UserActionAddEdit';
import { UserActionDelete } from './UserActions/UserActionDelete';
import { UserActionFilter } from './UserActions/UserActionFilter';
import { UserForm } from './UserForm';
import { UsersList } from './UserList';
import { UserMeta } from './UserMeta';
import { UserService } from './UserService';
const Index = () => {

  const filterFormRef = Form.useForm()[0];
  const addFormRef = Form.useForm()[0];

  const { closeFilterDialog } = Redux.DataGridSlice.actions
  const { entityName, isDeleteDialogOpen, isFilterModalOpen } = Redux.DataGridSlice.state()

  const [deleteUser, setDeleteUser] = React.useState<IUserEntity>();
  const [tags, setTags] = useState<IFilterForm[]>([]);
  const [apiResponse, setApiResponse] = useImmer<IUserApiMeta>({ roles: [], users: [] });
  const [optionsForFilterValues, setOptionsForFilters] = useImmer<any[]>([]);
  const { FILTER_COLUMN_OPTIONS, DATA_TABLE_COLS } = UserMeta()
  const userAction = {
    ...UserActionAddEdit({ addFormRef }),
    ...UserActionDelete({ deleteUser, setDeleteUser, setApiResponse }),
    ...UserActionFilter({ filterFormRef, apiResponse, setOptionsForFilters })
  };
  const userActionJsx = UserActionJsx({ userAction, addFormRef, filterFormRef })

  useEffect(() => {
    UserService.getRoles().then(res => {
      setApiResponse(meta => { meta.roles = res })
    })
    UserService.getUsers().then(res => {
      setApiResponse(meta => { meta.users = res })
    })
    return () => { }
  }, [])

  return (
    <>
      <UsersList props={{
        tags, setTags,
        headerActions: userActionJsx.headerActions,
        data: apiResponse.users,
        columns: DATA_TABLE_COLS(userActionJsx.tuppleAcion),
        applyFilters: userAction.applyFilters,
      }} />

      <UserForm props={{
        addFormRef, apiResponse,
        addEditFooterActions: userActionJsx.addEditFooterActions,
        handleAddEditSubmit: userAction.handleAddEditSubmit
      }} />

      <FilterModal props={{
        tags, setTags,
        handleColumnChange: userAction.handleColumnChange,
        optionValues: optionsForFilterValues,
        filterFooterActions: userActionJsx.filterFooterActions,
        filterFormRef, isFilterModalOpen,
        closeFilterDialog, FILTER_COLUMN_OPTIONS
      }} />

      <DeleteModal props={{
        handleDeleteSubmit: userAction.handleDeleteSubmit,
        handleDeleteCancel: userAction.handleDeleteCancel,
        isDeleteDialogOpen, entityName
      }} />
    </>
  )
}

export default Index;

