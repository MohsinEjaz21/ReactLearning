import { DataTable } from '@src/components/widgets/DataTable';
import { FilterChips } from '@src/components/widgets/FilterChips';
import { axios } from '@src/helpers/axios';
import { Card } from 'antd';
import React, { useEffect } from 'react';

export const UsersList = ({ props: { users, setUsers, headerActions, columns, tags, setTags } }) => {

  useEffect(() => {
    axios.GET({ url: '/api/mockTable' }).then(res => {
      setUsers(res.data);
    });
    return () => { }
  }, [])

  return (
    <>
      <div className='container'>
        <Card title="Users" extra={headerActions} >
          <FilterChips props={{ tags, setTags }}></FilterChips>
          <DataTable columns={columns} data={users} />
        </Card>
      </div>
    </>
  )
}
