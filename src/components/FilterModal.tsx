import { DevTool } from '@hookform/devtools';
import { OperatorUtils } from '@src/helpers/utils/OperatorUtils';
import { IColumns, IComponents, IFilterForm, IOperators } from '@src/interfaces';
import { Row } from 'antd';
import React, { useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { AntdCascader, AntdComponent, AntdSelect } from './AntdReusables';

export function FilterForm({ options, hookForm }) {

  const { control, setValue, formState: { errors } }: UseFormReturn<IFilterForm, any> = hookForm;
  const [componentType, setComponentType] = React.useState<IComponents>("input");
  const [operators, setOperatorsOptions] = useState<IOperators[]>();

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

  console.log(errors)
  const filterForm = {
    column: {
      control,
      options,
      errors,
      span: 24,
      label: "Column",
      controlName: "column",
      setValue,
      onChange: handleColumnChange,
    },
    operator: {
      span: 24,
      errors,
      control: control,
      options: operators,
      controlName: "operator",
      label: "Operator",
    },
    value: {
      span: 24,
      errors,
      control,
      label: "Value",
      placeholder: "Enter value",
      controlName: "value",
    }
  }

  return (
    <>
      {/* <form onSubmit={handleSubmit(data => console.log(data))} > */}
      <Row gutter={[8, 16]}>
        <AntdCascader {...filterForm.column} />
        <AntdSelect {...filterForm.operator} />
        <AntdComponent type={componentType} {...filterForm.value} />
      </Row>
      {/* </form> */}
      <DevTool control={control} />
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