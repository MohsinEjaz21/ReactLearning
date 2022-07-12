import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { BsFunnel } from 'react-icons/bs';
import { IoAddOutline } from 'react-icons/io5';


export function UserActionJsx({ userAction, addFormRef, filterFormRef }) {

  const tuppleAcion = (_, record: any) => (
    <Space size="small" className='tupple-actions'>
      <Button type="ghost"
        icon={<EditOutlined />}
        size="middle" shape="circle"
        onClick={() => userAction.onClickEdit(record)} />

      <Button type="ghost"
        icon={<DeleteOutlined />}
        size="middle" shape="circle"
        onClick={() => userAction.onClickDelete(record)} />
    </Space>
  )

  const headerActions = (
    <Space size="small" className='header-actions'>
      <Button
        className='center-icon add-icon' type="ghost" size="middle"
        shape="circle" icon={<IoAddOutline className='add-icon' />}
        onClick={userAction.onClickAdd}
      />
      <Button
        className='center-icon filter-icon' type="ghost" size="middle"
        shape="circle" icon={<BsFunnel className='filter-icon' />}
        onClick={userAction.onClickFilter} />
    </Space>
  )

  const addEditFooterActions = [
    <Button type="default" htmlType="button" onClick={userAction.handleAddEditCancel} >Cancel</Button>,
    <Button type="primary" htmlType="submit" onClick={() => addFormRef.submit()} >Submit</Button>
  ];

  const filterFooterActions = [
    <Button key="back" onClick={() => userAction.handleFilterCancel()}>Cancel</Button>,
    <Button key="clear" onClick={() => userAction.handleResetFilterForm()}>Clear</Button>,
    <Button type="primary" htmlType="submit" onClick={() => { filterFormRef.submit() }} >Submit</Button>
  ];

  return {
    tuppleAcion,
    headerActions,
    addEditFooterActions,
    filterFooterActions
  }
}
