import { OperatorUtils } from '@src/helpers/utils/OperatorUtils';
import { IColumns, IComponents, IOperators } from '@src/interfaces';
import { Form, Row } from 'antd';
import React, { useState } from 'react';
import { AntdCascader, AntdComponent, AntdSelect } from './AntdReusables';

export function FilterForm({ props: { options, handleFilterSubmit, ...rest } }) {
  const [componentType, setComponentType] = React.useState<IComponents>("input");
  const [operators, setOperatorsOptions] = useState<IOperators[]>();
  const filterFormRef: any = rest?.filterFormRef

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  function handleColumnChange(value: any[], selectedOptions: IColumns[]) {
    const { datatype: _datatype, componentType: _componentType } = selectedOptions?.[selectedOptions.length - 1];

    console.log(componentType);
    changeValueWidget();
    changeOperatorOptionValues();

    function changeOperatorOptionValues() {
      if (_datatype) {
        setOperatorsOptions(OperatorUtils.getOperatorByDataType(_datatype));
        setValue("operator", "=");
      }
    }

    function changeValueWidget() {
      if (_componentType) {
        setComponentType(_componentType);
        setValue("value", null);
      }
    }
  }

  const setValue = (key, value) => {
    filterFormRef.setFieldsValue({ [key]: value });
  }

  // console.log(errors)
  const filterForm = {
    column: {
      options,
      span: 24,
      label: "Column",
      controlName: "column",
      placeholder: 'Select Column',
      setValue,
      onChange: handleColumnChange,
    },
    operator: {
      span: 24,
      options: operators,
      placeholder: 'Select Operator',
      controlName: "operator",
      label: "Operator",
    },
    value: {
      span: 24,
      label: "Value",
      placeholder: "Enter value",
      controlName: "value",
    }
  }

  return (
    <>
      <Form form={filterFormRef}
        name="filterForm"
        onFinish={handleFilterSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={[8, 16]}>
          {/* print form  */}
          {/* {JSON.stringify(filterFormRef, null, 2)} */}

          <AntdCascader {...filterForm.column} />
          <AntdSelect {...filterForm.operator} />
          <AntdComponent type={componentType} {...filterForm.value} />
        </Row>
      </Form>
    </>
  );
}







{/* <AntdSelect
  span={24}
  control={control}
  options={operators}
  controlName="operator"
  label="Operator" /> */}

{/* <AntdTextArea
  span={24}
  control={control}
  label={"Value"}
  placeholder="Enter value"
  controlName="value" /> */}

{/* <AntdDatePicker
  span={24}
  control={control}
  label={"Value"}
  placeholder="Enter value"
  controlName="value" /> */}

{/* <AntdTimePicker
  span={24}
  control={control}
  label={"Value"}
  placeholder="Enter value"
  controlName="value" /> */}


/*
<Input type="text" placeholder="Value" {...register("value", { required: true })} />
<Select {...register("Column", { required: true })}  >
<Option value="">Select</Option>
<Option value="firstName">firstName</Option>
<Option value="lastName">lastName</Option>
<Option value="gender">gender</Option>
</Select>
<Select {...register("Operator", { required: true })}>
<Option value="">Select</Option>
<Option value=">"> {'>'} </Option>
<Option value=">=">{'>='}</Option>
<Option value="=">{'>='}</Option>
</Select> */


  // const [columns, setColumns] = React.useState<any>();
  // console.log(getValues().column)