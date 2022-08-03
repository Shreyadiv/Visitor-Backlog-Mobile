import axios from 'axios';

export const userLogin = (user: User): Promise<User> => {
  console.log('###', user);
  return axios.post('http://10.0.2.2:8080/addUser', user);
};
