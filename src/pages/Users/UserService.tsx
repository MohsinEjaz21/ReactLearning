import { axios } from '@src/helpers/axios';
export class _UserService {
  getUsers = async () => {
    const response = await axios.GET({ url: `/api/mockTable` });
    return response.data;
  }

  getRoles = async () => {
    const response = await axios.GET({ url: `/api/roles` });
    return response.data;
  }
}
export const UserService = new _UserService();