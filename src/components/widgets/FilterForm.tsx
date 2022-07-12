
import { IAntdWidgetType, IColumns, IDatatypes, IFilterForm, IOperators, IOperatorTypes } from '@interfaces/IFilterForm';
import { UtilsNotification } from '@src/helpers/utils/utils-notification';
import { UtilOperators } from '@src/helpers/utils/utils-opertator';
import { Form, FormInstance, Row } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { AntdCascader, AntdComponent, AntdSelect } from './AntdWidgets';


export function FilterForm({ props: { options, ...rest } }) {
  const [componentType, setComponentType] = React.useState<IAntdWidgetType>("input");
  const [operators, setOperatorsOptions] = useState<IOperators[]>();
  const [columnDataType, setColumnDataType] = useState<IDatatypes>();
  const { tags, setTags, closeFilterDialog, afterHandleColumnChange, optionValues: optionsForValues } = rest

  const filterFormRef: FormInstance = rest?.filterFormRef
  const operator = Form.useWatch('operator', filterFormRef);

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    const selectedOperator: IOperatorTypes = operator
    console.log(columnDataType, selectedOperator)
    if (selectedOperator?.toUpperCase() === 'IN' || selectedOperator?.toUpperCase() === 'NOT IN') {
      if (columnDataType === 'string') {
        setComponentType("multiselect")
      }
    }
    return () => { }
  }, [operator])


  function handleFilterSubmit(response: IFilterForm) {
    console.log(response)
    // check response object matches inside tags array
    normalizePayload(response);
    const isTagExistAlready = isTagExactMatchWithAlreadyAdded(response)
    if (isTagExistAlready) {
      UtilsNotification.filterTagExactlyMatch(response)
      return;
    }
    setTags([...tags, { ...response }]);
    closeFilterDialog()
  }

  function normalizePayload(response: IFilterForm) {
    if (response.value instanceof Date || response.value instanceof moment) {
      response.value = moment(response.value).format("YYYY-MM-DD");
    }
  }

  function isTagExactMatchWithAlreadyAdded(response: IFilterForm) {
    return !!tags.filter(tag => tag.column === response.column
      && tag.value === response.value
      && tag.operator === response.operator)?.length;
  }

  function handleColumnChange(value: any[], selectedOptions: IColumns[]) {
    const selectedOptionFilter = selectedOptions?.[selectedOptions.length - 1];
    const { datatype: _datatype, componentType: _componentType } = selectedOptionFilter;
    setColumnDataType(_datatype);
    console.log(componentType);
    changeWidgetOfValue();
    changeOperatorOptionValues();

    function changeOperatorOptionValues() {
      if (_datatype) {
        setOperatorsOptions(UtilOperators.fetchOperatorsByDataType(_datatype));
        setValue("operator", "=");
      }
    }

    function changeWidgetOfValue() {
      if (_componentType) {
        setComponentType(_componentType);
        setValue("value", null);
      }
    }

    afterHandleColumnChange(selectedOptionFilter);
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
          <AntdCascader {...filterForm.column} />
          <AntdSelect {...filterForm.operator} />
          <AntdComponent type={componentType} {...filterForm.value} options={optionsForValues} />
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