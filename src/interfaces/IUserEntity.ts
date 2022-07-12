export type IUserEntity = {
  key: string;
  name: string;
  age: number;
  address: string;
}

export type IUserFilterMeta = {
  roles: any[];
  users: IUserEntity[];
  filter: { optionValues: any[] }
}