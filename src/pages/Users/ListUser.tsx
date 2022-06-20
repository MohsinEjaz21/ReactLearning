import TableImpl from '@src/components/Table';
import axios from '@src/helpers/axios';
import { IUsers } from '@src/interfaces';
import { Card } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { useEffect } from 'react';

export const UsersList = ({ props: { users, setUsers, headerActions, tuppleAcion } }) => {

  const columns: ColumnsType<IUsers> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      sorter: (a, b) => a.address.localeCompare(b.address),
    },
    {
      title: 'Action',
      key: 'action',
      render: tuppleAcion
    },
  ];

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
          <TableImpl columns={columns} data={users} />
        </Card>
      </div>
    </>
  )
}
