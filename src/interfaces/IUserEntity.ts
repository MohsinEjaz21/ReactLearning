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

