import { Cascader, Col, DatePicker, Form, Input, InputNumber, Select, TimePicker } from 'antd';
import React from 'react';

const AntFormItem = ({ props: { label, span, controlName, ...rest }, children }) => {
  const ColWrapper = ({ children, span }) => {
    return span ? <Col span={span}>{children}</Col> : children;
  }
  return (
    <ColWrapper span={span}>
      {children}
    </ColWrapper>
  )
}

export const AntdComponent = ({ type, ...rest }: any) => {
  const { options, ...props } = rest
  const jsx = {
    cascader: <AntdCascader {...props} />,
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
  const { span } = props;

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
    <AntFormItem props={{ label, span, controlName }} >
      <Form.Item
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        label={label}
        rules={[{ required: true, message: 'This Field is required' }]}
        name={controlName}>
        <Cascader
          displayRender={displayRender}
          style={{ width: '100%' }}
          options={options}
          onChange={handleChange}
          placeholder="Please select" />
      </Form.Item>
    </AntFormItem>
  );
}

export function AntdSelect({ label, options, controlName, ...props }) {
  const { span, errors } = props;
  return (
    <AntFormItem props={{ label, span, controlName }} >
      <Form.Item
        label={label}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'This Field is required' }]}
        name={controlName}
      >
        <Select style={{ width: '100%' }} options={options} />
      </Form.Item>
    </AntFormItem>
  );
}

export function AntdInput({ label, controlName, placeholder, ...props }) {
  const { span } = props;
  return (
    <AntFormItem props={{ label, span, controlName }}>
      <Form.Item
        label={label}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'This Field is required' }]}
        name={controlName}
      >
        <Input style={{ width: '100%' }} placeholder={placeholder} />
      </Form.Item>
    </AntFormItem>
  );
}

export function AntdInputNumber({ label, controlName, placeholder, ...props }) {
  const { span } = props;
  return (
    <AntFormItem props={{ label, span, controlName }} >
      <Form.Item
        label={label}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'This Field is required' }]}
        name={controlName}
      >
        <InputNumber style={{ width: '100%' }} placeholder={placeholder} />
      </Form.Item>
    </AntFormItem>
  );
}

export function AntdTextArea({ label, controlName, placeholder, ...props }) {
  const { span, rows = 4 } = props;
  return (
    <AntFormItem props={{ label, span, controlName }}>
      <Form.Item
        label={label}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'This Field is required' }]}
        name={controlName}
      >
        <Input.TextArea style={{ width: '100%' }} rows={rows} placeholder={placeholder} />
      </Form.Item>
    </AntFormItem>
  );
}

export function AntdDatePicker({ label, controlName, ...props }) {
  const { span, picker = "date" } = props;
  return (
    <AntFormItem props={{ label, span, controlName }} >
      <Form.Item
        label={label}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'This Field is required' }]}
        name={controlName} >
        <DatePicker
          style={{ width: '100%' }}
          picker={picker} />
      </Form.Item>
    </AntFormItem>
  );
}

export function AntdTimePicker({ label, controlName, ...props }) {
  const { span, format = "HH:mm" } = props;
  return (
    <AntFormItem props={{ label, span, controlName }}>
      <Form.Item
        label={label}
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        rules={[{ required: true, message: 'This Field is required' }]}
        name={controlName}>
        <TimePicker
          style={{ width: '100%' }}
          format={format} />
      </Form.Item>
    </AntFormItem>
  );
}

