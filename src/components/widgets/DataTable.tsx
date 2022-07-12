import { Table } from 'antd';
import React from 'react';

export const DataTable = ({ columns, data }) => {
  return (
    <Table columns={columns} dataSource={data} />
  )
}
