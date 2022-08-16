import axios from 'axios';

export const userSignup = (user: User): Promise<User> => {
  return axios.post('http://10.0.2.2:8080/addUser', user);
};
