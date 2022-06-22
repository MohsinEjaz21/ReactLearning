import { FilterTag } from '@src/components/FilterChips';
import TableImpl from '@src/components/Table';
import axios from '@src/helpers/axios';
import { Card } from 'antd';
import React, { useEffect } from 'react';

export const UsersList = ({ props: { users, setUsers, headerActions, columns, tags, setTags } }) => {

  useEffect(() => {
    axios.get({ url: '/api/mockTable' }).then(res => {
      setUsers(res.data);
    });
    return () => { }
  }, [])

  return (
    <>
      <div className='container'>
        <Card title="Users" extra={headerActions} >
          <FilterTag props={{ tags, setTags }}></FilterTag>
          <TableImpl columns={columns} data={users} />
        </Card>
      </div>
    </>
  )
}
