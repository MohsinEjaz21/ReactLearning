import { DevTool } from '@hookform/devtools';
import { OperatorUtils } from '@src/helpers/utils/OperatorUtils';
import { IColumns, IComponents, IFilterForm, IOperators } from '@src/interfaces';
import { Row } from 'antd';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AntdCascader, AntdComponent, AntdSelect } from './AntdReusables';

export function FilterForm({ options, onSubmit }) {

  const { control, register, getValues, handleSubmit, setValue, formState: { errors } } = useForm<IFilterForm>();
  const [type, setType] = React.useState<IComponents>("input");
  const [operators, setOperatorsOptions] = useState<IOperators[]>();

  function handleColumnChange(value: any[], selectedOptions: IColumns[]) {
    const { datatype, componentType } = selectedOptions?.[selectedOptions.length - 1];
    console.log(componentType);

    if (componentType) {
      setType(componentType);
      setValue("value", null)
    }
    if (datatype) {
      setOperatorsOptions(OperatorUtils.getOperator(datatype));
      setValue("operator", "=")
    }
  }


  const filterForm = {
    column: {
      control,
      options,
      span: 24,
      label: "Column",
      controlName: "column",
      setValue,
      onChange: handleColumnChange
    },
    operator: {
      span: 24,
      control: control,
      options: operators,
      controlName: "operator",
      label: "Operator"
    },
    value: {
      span: 24,
      control,
      label: "Value",
      placeholder: "Enter value",
      controlName: "value"
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={[8, 16]}>
          <AntdCascader {...filterForm.column} />
          <AntdSelect {...filterForm.operator} />
          <AntdComponent type={type} {...filterForm.value} />
        </Row>
      </form>
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