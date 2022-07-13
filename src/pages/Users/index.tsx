import { IFilterForm } from '@interfaces/IFilterForm';
import { IUserAction, IUserApiMeta, IUserEntity } from '@interfaces/IUserEntity';
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
import { UserMetaAddForm, UserMetaFilterForm, UserMetaTable } from './UserMeta';
import { UserService } from './UserService';
const Index = () => {

  const [filterFormRef, addFormRef] = [Form.useForm()[0], Form.useForm()[0]];
  const { closeFilterDialog } = Redux.DataGridSlice.actions
  const { isDeleteDialogOpen, isFilterModalOpen, entityName } = Redux.DataGridSlice.state()

  const [deleteUser, setDeleteUser] = React.useState<IUserEntity>();
  const [tags, setTags] = useState<IFilterForm[]>([]);
  const [apiResponse, setApiResponse] = useImmer<IUserApiMeta>({ roles: [], users: [] });
  const [optionsForFilterValues, setOptionsForFilters] = useImmer<any[]>([]);
  const userMeta = {
    ...UserMetaAddForm(),
    ...UserMetaFilterForm(),
    ...UserMetaTable()
  };
  const userAction: IUserAction = {
    ...UserActionAddEdit({ addFormRef }),
    ...UserActionDelete({ deleteUser, setDeleteUser, setApiResponse }),
    ...UserActionFilter({ filterFormRef, apiResponse, setOptionsForFilters })
  };
  const userActionJsx = UserActionJsx({
    userAction, addFormRef, filterFormRef
  });

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
        tags, setTags, data: apiResponse.users,
        headerActions: userActionJsx.headerActions,
        columns: userMeta.userMetaTable(userActionJsx.tuppleAcion),
        applyFilters: userAction.applyFilters,
      }} />

      <UserForm props={{
        addFormRef, apiResponse,
        userAddFormMeta: userMeta.userMetaAddForm,
        addEditFooterActions: userActionJsx.addEditFooterActions,
        handleAddEditSubmit: userAction.handleAddEditSubmit
      }} />

      <FilterModal props={{
        filterFormRef, isFilterModalOpen, closeFilterDialog,
        tags, setTags, optionValues: optionsForFilterValues,
        filterFooterActions: userActionJsx.filterFooterActions,
        filterColumnOptions: userMeta.filterColumnOptions,
        handleColumnChange: userAction.handleColumnChange,
      }} />

      <DeleteModal props={{
        isDeleteDialogOpen, entityName,
        handleDeleteSubmit: userAction.handleDeleteSubmit,
        handleDeleteCancel: userAction.handleDeleteCancel,
      }} />
    </>
  )
}

export default Index;


