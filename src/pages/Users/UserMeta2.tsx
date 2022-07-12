import { IUserEntity } from "@interfaces/IUserEntity";
import { ColumnsType } from "antd/lib/table";
import { useEffect, useReducer } from "react";

export function UserMeta2() {

  const [filterUserState, filterUserSetState] = useReducer((state: IUserEntity, action: any) => ({ ...state, ...action }), {
    age: { value: 'age', label: 'Age', datatype: 'number', renderElement: 'number' },
    dob: { value: 'dob', label: 'Date of birth', datatype: 'date', renderElement: 'date' },
    email: { value: 'email', label: 'Email', datatype: 'string', renderElement: 'string' },
    roleType: { value: 'roleType', label: 'Role type', datatype: 'string', renderElement: 'select' },
  });

  let filterUserAttributes = Object.values(filterUserState);


  useEffect(() => {

    return () => { }
  }, [])

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
}

