
export type IGenrics = {
  [key: string]: any;
}

export type IUsers = {
  key: string;
  name: string;
  age: number;
  address: string;
}

export type IFilterForm = {
  column: string;
  operator: string | null;
  value: any;
};

export type IColumns = {
  value: string | number;
  label: string;
  datatype?: IDatatype;
  componentType?: IComponents;
  children?: IColumns[];
}

export type IOperators = {
  label: string;
  value: string;
}

export type IComponents = (
  "cascader" |
  "input" |
  "textarea" |
  "datepicker" |
  "timepicker" |
  "select" |
  "checkbox" |
  "radio" |
  "switch" |
  "slider" |
  "rate" |
  "number"
)


export type IDatatype = (
  "string" |
  "number" |
  "date" |
  "boolean"
);


// export namespace Schemas {
// }

