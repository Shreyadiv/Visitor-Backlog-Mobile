import axios from 'axios';

export const userSave = (user: UpdateUser): Promise<UpdateUser> => {
  return axios.put('http://10.0.2.2:8080/updateUser', user);
};
