import { Cascader, Checkbox, Col, DatePicker, Form, Input, InputNumber, Select, TimePicker } from 'antd';
import React from 'react';

const AntFormItem = ({ props, children }) => {
  const { span, label, controlName, placeholder, extras } = props;
  const WrapperCol = ({ children }) => (
    span ? <Col span={span}>{children}</Col> : children
  )

  return (
    <WrapperCol>
      <Form.Item
        {...extras}
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


export function AntdCascader(props) {
  const { options, onChange, setValue, controlName } = props

  function handleChange(value: any[], selectedOptions: any) {
    const joinedValue = value.join('.');
    setValue(controlName, joinedValue);
    if (onChange) onChange(value, selectedOptions);
  }

  function displayRender(label, selectedOptions) {
    return label[label.length - 1].split('.').join(' / ');
  }

  return (
    <AntFormItem props={props} >
      <Cascader
        displayRender={displayRender}
        options={options}
        onChange={handleChange} />
    </AntFormItem>
  );
}

export function AntdSelect(props) {
  const { options } = props;
  return (
    <AntFormItem props={props} >
      <Select options={options} />
    </AntFormItem>
  );
}

export function AntdInput(props) {
  return (
    <AntFormItem props={props}>
      <Input />
    </AntFormItem>
  );
}

export function AntdInputNumber(props) {
  return (
    <AntFormItem props={props} >
      <InputNumber />
    </AntFormItem>
  );
}

export function AntdTextArea(props) {
  const { rows = 4 } = props;
  return (
    <AntFormItem props={props}>
      <Input.TextArea rows={rows} />
    </AntFormItem>
  );
}

export function AntdDatePicker(props) {
  const picker = props?.picker || 'date';
  const format = props?.format || 'DD-MMM-YYYY';
  return (
    <AntFormItem props={props} >
      <DatePicker
        format={format}
        picker={picker} />
    </AntFormItem>
  );
}

export function AntdTimePicker(props) {
  const format = props?.format || 'HH:mm';
  return (
    <AntFormItem props={props}>
      <TimePicker format={format} />
    </AntFormItem>
  );
}

export function AntdCheckbox(props) {
  return (
    <AntFormItem props={{ ...props, extras: { valuePropName: "checked" } }}>
      <Checkbox />
    </AntFormItem>
  );
}

