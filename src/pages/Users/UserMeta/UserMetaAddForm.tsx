export function UserMetaAddForm() {
  const userMetaAddForm = {
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

  return { userMetaAddForm }
}
