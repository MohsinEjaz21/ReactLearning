
import { IUserEntity } from "@interfaces/IUserEntity";
import { ColumnsType } from "antd/lib/table";
export function UserMetaTable() {

  const userMetaTable = (tuppleAcion): ColumnsType<IUserEntity> => {
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

  return { userMetaTable }
}
