
export namespace IApp {
  export type EntityDataType = (
    "string" |
    "number" |
    "date" |
    "boolean"
  );

  export type Operators = {
    label: string;
    value: string;
  }

  export type Genrics = {
    [key: string]: any;
  }

  export type Users = {
    key: string;
    name: string;
    age: number;
    address: string;
  }

  export type FilterForm = {
    column: string;
    operator: string | null;
    value: any;
  };

  export type Cascader = {
    value: string | number;
    label: string;
    datatype?: string;
    componentType?: IAntd.ComponentTypes;
    children?: Cascader[];
  }
}
export namespace IAntd {
  export type ComponentTypes = (
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
}


