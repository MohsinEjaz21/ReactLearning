import { IAntdWidgetType } from "./IAntdWidgetType";
import { IDatatypes } from "./IDataTypes";

export type IColumns = {
  value: string | number;
  label: string;
  datatype?: IDatatypes;
  componentType?: IAntdWidgetType;
  children?: IColumns[];
}
