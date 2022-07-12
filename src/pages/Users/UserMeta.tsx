import { IUserEntity } from "@interfaces/IUserEntity";
import { ColumnsType } from "antd/lib/table";
export function UserMeta() {

  const filterUserAttributes = [
    {
      value: 'Age',
      label: 'Age',
      datatype: 'number',
      componentType: 'number'
    },
    {
      value: 'dob',
      label: 'Date of Birth',
      datatype: 'date',
      componentType: 'datepicker'
    },
    {
      value: 'roles',
      label: 'Role',
      datatype: 'string',
      componentType: 'select'
    },
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          datatype: 'string',
          componentType: 'textarea',
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              componentType: 'datepicker',
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ]

  const getUserEntityColumns = (tuppleAcion): ColumnsType<IUserEntity> => {
    return ([
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
    ])
  }

  return { filterUserAttributes, getUserEntityColumns }
}
