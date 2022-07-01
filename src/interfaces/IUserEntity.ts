import { FormInstance } from "antd";
import { IFilterForm } from "./IFilterForm";

export type IUserEntity = {
  key: string;
  name: string;
  age: number;
  address: string;
}

export type IUserTemp = {
  entityName?: 'User',
  filterFormRef?: FormInstance<any>,
  addFormRef?: FormInstance<any>,
  users?: IUserEntity[],
  deleteUser?: IUserEntity,
  tags?: IFilterForm[],
}
