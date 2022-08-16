import axios from 'axios';

export const userLogin = (visitorLog: VisitorLog): Promise<VisitorLog> => {
  return axios.post('http://10.0.2.2:8080/addVisitorLog', visitorLog);
};
