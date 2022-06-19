import { Cascader, Col, DatePicker, Input, InputNumber, Select, TimePicker } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';

const AntFormItem = ({ props: { label, span, controlName, ...rest }, children }) => {
  const { errors } = rest
  const error = errors?.[controlName]
  const ColWrapper = ({ children, span }) => {
    return span ? <Col span={span}>{children}</Col> : children;
  }
  return (
    <ColWrapper span={span}>
      <div className='ant-form-item'>
        <div className='ant-form-item-label'>
          <label>{label}</label>
        </div>
        {children}
      </div>
      {error && <div className="ant-form-item-explain ant-form-item-explain-connected">
        <div className="ant-form-item-explain-error">{error?.type}</div>
      </div>}
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


export function AntdCascader({ label, control, options, onChange, setValue, controlName, ...props }) {
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
      <Controller
        rules={{ required: true }}
        name={controlName}
        control={control}
        render={({ field }) => (
          <Cascader
            {...field}
            displayRender={displayRender}
            style={{ width: '100%' }}
            options={options}
            onChange={handleChange}
            placeholder="Please select" />
        )} />
    </AntFormItem>
  );
}

export function AntdSelect({ label, control, options, controlName, ...props }) {
  const { span, errors } = props;
  return (
    <AntFormItem props={{ label, span, errors, controlName }} >
      <Controller
        rules={{ required: true }}
        name={controlName}
        control={control}
        render={({ field }) => (
          <Select style={{ width: '100%' }} {...field} options={options} />
        )} />
    </AntFormItem>
  );
}

export function AntdInput({ label, control, errors, controlName, placeholder, ...props }) {
  const { span } = props;
  return (
    <AntFormItem props={{ label, span, errors, controlName }}>
      <Controller
        rules={{ required: true }}
        name={controlName}
        control={control}
        render={({ field }) => <Input style={{ width: '100%' }} {...field} placeholder={placeholder} />} />
    </AntFormItem>
  );
}

export function AntdInputNumber({ label, control, errors, controlName, placeholder, ...props }) {
  const { span } = props;
  return (
    <AntFormItem props={{ label, span, errors, controlName }} >
      <Controller
        rules={{ required: true }}
        name={controlName}
        control={control}
        render={({ field }) => <InputNumber style={{ width: '100%' }} {...field} placeholder={placeholder} />} />
    </AntFormItem>
  );
}

export function AntdTextArea({ label, control, errors, controlName, placeholder, ...props }) {
  const { span, rows = 4 } = props;
  return (
    <AntFormItem props={{ label, span, errors, controlName }}>
      <Controller
        rules={{ required: true }}
        name={controlName}
        control={control}
        render={({ field }) => <Input.TextArea style={{ width: '100%' }} status="error" rows={rows} {...field} placeholder={placeholder} />} />
    </AntFormItem>
  );
}

export function AntdDatePicker({ label, control, errors, controlName, ...props }) {
  const { span, picker = "date" } = props;
  return (
    <AntFormItem props={{ label, span, errors, controlName }} >
      <Controller
        rules={{ required: true }}
        name={controlName}
        control={control}
        render={({ field }) => (
          <DatePicker
            style={{ width: '100%' }}
            {...field} picker={picker} />
        )}
      />
    </AntFormItem>
  );
}

export function AntdTimePicker({ label, control, errors, controlName, ...props }) {
  const { span, format = "HH:mm" } = props;
  return (
    <AntFormItem props={{ label, span, errors, controlName }}>
      <Controller
        rules={{ required: true }}
        name={controlName}
        control={control}
        render={({ field }) => (
          <TimePicker
            style={{ width: '100%' }}
            {...field} format={format} />
        )}
      />
    </AntFormItem>
  );
}

