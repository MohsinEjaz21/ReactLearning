import { Cascader, Checkbox, Col, DatePicker, Form, Input, InputNumber, Select, TimePicker } from 'antd';
import React from 'react';

const AntFormItem = ({ props, children }) => {
  const { span, label, controlName, placeholder, ...rest } = props;
  const WrapperCol = ({ children }) => (
    span ? <Col span={span}>{children}</Col> : children
  )

  return (
    <WrapperCol>
      <Form.Item
        {...rest}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        label={label}
        rules={[{ required: true, message: 'This Field is required' }]}
        name={controlName}>
        {React.cloneElement(children, { style: { width: '100%' }, placeholder })}
      </Form.Item>
    </WrapperCol>
  )
}

export const AntdComponent = ({ type, ...rest }: any) => {
  const { options, ...props } = rest
  const jsx = {
    cascader: <AntdCascader {...props} options={options} />,
    input: <AntdInput {...props} />,
    textarea: <AntdTextArea {...props} />,
    datepicker: <AntdDatePicker {...props} />,
    timepicker: <AntdTimePicker {...props} />,
    select: <AntdSelect {...props} options={options} />,
    number: <AntdInputNumber {...props} />,
  }
  return jsx[type];
}


export function AntdCascader({ label, options, onChange, setValue, controlName, ...props }) {
  const { span, placeholder } = props;

  function handleChange(value: any[], selectedOptions: any) {
    // console.log(value, selectedOptions);
    const joinedValue = value.join('.');
    setValue(controlName, joinedValue);
    if (onChange) {
      onChange(value, selectedOptions);
    }
  }

  function displayRender(label, selectedOptions) {
    // console.log(label, selectedOptions);
    // console.log(label[label.length - 1]);
    return label[label.length - 1].split('.').join(' / ');
  }

  return (
    <AntFormItem props={{ span, label, controlName, placeholder }} >
      <Cascader
        displayRender={displayRender}
        options={options}
        onChange={handleChange} />
    </AntFormItem>
  );
}

export function AntdSelect({ label, options, controlName, ...props }) {
  const { span, placeholder } = props;
  return (
    <AntFormItem props={{ span, label, controlName, placeholder }} >
      <Select options={options} />
    </AntFormItem>
  );
}

export function AntdInput({ label, controlName, placeholder, ...props }) {
  const { span } = props;
  return (
    <AntFormItem props={{ span, label, controlName, placeholder }}>
      <Input />
    </AntFormItem>
  );
}

export function AntdInputNumber({ span, label, controlName, ...props }) {
  const { placeholder } = props;
  return (
    <AntFormItem props={{ span, label, controlName, placeholder }} >
      <InputNumber />
    </AntFormItem>
  );
}

export function AntdTextArea({ span, label, controlName, ...props }) {
  const { placeholder, rows = 4 } = props;
  return (
    <AntFormItem props={{ span, label, controlName, placeholder }}>
      <Input.TextArea rows={rows} />
    </AntFormItem>
  );
}

export function AntdDatePicker({ span, label, controlName, ...props }) {
  const { picker = "date" } = props;
  return (
    <AntFormItem props={{ span, label, controlName }} >
      <DatePicker
        format={'DD-MMM-YYYY'}
        picker={picker} />
    </AntFormItem>
  );
}

export function AntdTimePicker({ span, label, controlName, ...props }) {
  const { format = "HH:mm" } = props;
  return (
    <AntFormItem props={{ span, label, controlName }}>
      <TimePicker format={format} />
    </AntFormItem>
  );
}

export function AntdCheckbox({ span, label, controlName, ...props }) {
  return (
    <AntFormItem props={{ span, label, controlName, valuePropName: "checked" }}>
      <Checkbox />
    </AntFormItem>
  );
}

