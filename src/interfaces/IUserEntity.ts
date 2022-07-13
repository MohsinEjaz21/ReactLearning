import { UserActionAddEdit, UserActionDelete, UserActionFilter } from "@pages/Users/UserActions";

export type IUserEntity = {
  key: string;
  name: string;
  age: number;
  address: string;
}

export type IUserApiMeta = {
  roles: any[];
  users: IUserEntity[];
}

export type IUserAction = ReturnType<typeof UserActionAddEdit>
  & ReturnType<typeof UserActionFilter>
  & ReturnType<typeof UserActionDelete>;