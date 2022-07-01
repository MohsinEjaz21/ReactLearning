import { UtilCommons } from '@src/helpers/utils/utils-common';
import { Cascader, Checkbox, Col, DatePicker, Form, Input, InputNumber, Radio, Select, Switch, TimePicker } from 'antd';
import { Option } from 'antd/lib/mentions';
import React from 'react';

const AntFormItem = ({ props, children }) => {
  const { span, label, controlName, placeholder, extras, labelCol, wrapperCol } = props;
  const WrapperCol = ({ children }) => (
    span ? <Col span={span}>{children}</Col> : children
  )

  return (
    <WrapperCol>
      <Form.Item
        {...extras}
        labelCol={{ span: labelCol || 24 }}
        wrapperCol={{ span: wrapperCol || 24 }}
        label={label}
        rules={[{ required: true, message: 'This Field is required' }]}
        name={controlName}>
        {React.cloneElement(children, { placeholder })}
      </Form.Item>
    </WrapperCol>
  )
}

function boolExtraProp(props: any): any {
  return { ...props, extras: { valuePropName: "checked" } };
}

function ForeachOption(props) {
  const { options, optionLabel = 'value', optionValue = 'label' } = props
  const evaluateProp = (element, key) => UtilCommons.evaluateResult(element, key)
  return options.map((option, index) => (
    <props.widget key={index} value={evaluateProp(option, optionValue)}>
      {evaluateProp(option, optionLabel)}
    </props.widget>
  ))
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
    multiselect: <AntdMultiSelect {...props} options={options} />,
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


export function AntdInput(props) {
  return (
    <AntFormItem props={props}>
      <Input className='w100' />
    </AntFormItem>
  );
}

export function AntdInputNumber(props) {
  return (
    <AntFormItem props={props} >
      <InputNumber className='w100' />
    </AntFormItem>
  );
}

export function AntdTextArea(props) {
  const { rows = 4 } = props;
  return (
    <AntFormItem props={props}>
      <Input.TextArea rows={rows} className='w100' />
    </AntFormItem>
  );
}

export function AntdDatePicker(props) {
  const picker = props?.picker || 'date';
  const format = props?.format || 'DD-MMM-YYYY';
  return (
    <AntFormItem props={props} >
      <DatePicker
        className='w100'
        format={format}
        picker={picker} />
    </AntFormItem>
  );
}

export function AntdTimePicker(props) {
  const format = props?.format || 'HH:mm';
  return (
    <AntFormItem props={props}>
      <TimePicker className='w100' format={format} />
    </AntFormItem>
  );
}

export function AntdCheckbox(props) {
  return (
    <AntFormItem props={boolExtraProp(props)}>
      <Checkbox />
    </AntFormItem>
  );
}

export function AntdSwitch(props) {
  return (
    <AntFormItem props={boolExtraProp(props)}>
      <Switch />
    </AntFormItem>
  );
}

export function AntdSelect(props) {
  return (
    <AntFormItem props={props} >
      <Select>
        <ForeachOption {...props} widget={<Option />} />
      </Select>
    </AntFormItem>
  );
}

export function AntdMultiSelect(props) {
  return (
    <AntFormItem props={props} >
      <Select mode="multiple" >
        <ForeachOption {...props} widget={<Option />} />
      </Select>
    </AntFormItem>
  );
}

export function AntdRadio(props) {
  const { options, onChange, type = 'default' } = props;
  return (
    <AntFormItem props={boolExtraProp(props)}>
      <Radio.Group options={options} onChange={onChange} optionType={type} buttonStyle="solid" >
        <ForeachOption {...props} widget={<Radio.Button />} />
      </Radio.Group>
    </AntFormItem>
  );
}


// export function AntdRadio(props) {
//   const { options, onChange, type = 'default' } = props;
//   const { optionLabel = 'value', optionValue = 'label' } = props


//   return (
//     <AntFormItem props={boolExtraProp(props)}>
//       <Radio.Group options={options} onChange={onChange} optionType={type} buttonStyle="solid" >
//         {options.map((option, index) => forEachOption(option, index))}
//       </Radio.Group>
//     </AntFormItem>
//   );

//   function forEachOption(option: any, index: number) {
//     const evaluateProp = (element, key) => UtilCommons.evaluateResult(element, key)
//     return <Radio.Button key={index} value={evaluateProp(option, optionValue)}>
//       {evaluateProp(option, optionLabel)}
//     </Radio.Button>;
//   }
// }

