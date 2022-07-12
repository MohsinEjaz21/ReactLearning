import { IUserEntity } from "@interfaces/IUserEntity";
import { ColumnsType } from "antd/lib/table";
export function UserMeta() {


  const addFormFields = {
    role: {
      controlName: 'role',
      label: 'Role',
      type: 'button',
      placeholder: "Enter Role",
      value: 'user',
    },
    dob: {
      span: 24,
      label: "Date Of Birth",
      placeholder: "Enter value",
      controlName: "dob",
      rules: [
        {
          required: true,
          message: "Please enter date of birth",
        },
      ],
    },
    isMarried: {
      span: 24, labelCol: 24, wrapperCol: 24,
      label: "Is Married",
      placeholder: "Enter value",
      controlName: "isMarried",
      optionValue: 'value',
      optionLabel: 'label',
      rules: [
        {
          required: true,
          message: "Please enter isMarried",
        },
      ],
    },
  }

  const mFilterColumnOptions = [
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

  const mDataTableCols = (tuppleAcion): ColumnsType<IUserEntity> => {
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

  return { FILTER_COLUMN_OPTIONS: mFilterColumnOptions, DATA_TABLE_COLS: mDataTableCols, addFormFields }
}
