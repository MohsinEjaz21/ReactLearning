import { Table } from 'antd';
import React from 'react';

const TableImpl = ({ columns, data }) => {
  return (
    <Table columns={columns} dataSource={data} />
  )
}


export default TableImpl;