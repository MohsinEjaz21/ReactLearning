export type IFilterForm = {
  column: string;
  operator: string | null;
  value: any;
};

export type IOperators = {
  label: string;
  value: string;
}

export type IColumns = {
  value: string | number;
  label: string;
  datatype?: IDatatypes;
  componentType?: IAntdWidgetType;
  children?: IColumns[];
}

export type IDatatypes = (
  "string" |
  "number" |
  "date" |
  "boolean"
);

export type IOperatorTypes = (
  ">" |
  ">=" |
  "<" |
  "<=" |
  "=" |
  "!=" |
  "IN" |
  "NOT IN" |
  "LIKE"
)

export type IAntdWidgetType = (
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
  "multiselect" |
  "rate" |
  "number"
)