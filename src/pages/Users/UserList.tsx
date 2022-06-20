import { CustomBtn } from '@src/components/CustomBtn';
import TableImpl from '@src/components/Table';
import axios from '@src/helpers/axios';
import { IFilterForm, IUsers } from '@src/interfaces';
import { Card, Tag } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { useEffect, useState } from 'react';



function FilterTag({ tags }) {

  function applyFilters() { }
  function handleTagClose(tag) {
    console.log("close filter called", tag)
  }

  return (<Card>
    {tags.map(tag =>
      <Tag color="magenta" key={`${tag.column}${tag.operator}${tag.value}`} closable
        onClose={() => handleTagClose(tag)}>
        {tag.column} {tag.operator} {tag.value}
      </Tag>
    )}
    <CustomBtn label='Apply Filter' handleClick={applyFilters} />
  </Card>);
}


export const UsersList = ({ props: { users, setUsers, headerActions, tuppleAcion, tags } }) => {
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
          <FilterTag tags={tags}></FilterTag>
          <TableImpl columns={columns} data={users} />
        </Card>
      </div>
    </>
  )
}
