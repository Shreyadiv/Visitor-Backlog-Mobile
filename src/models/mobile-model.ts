export interface User {
  companyName: string;
  fullname: string;
  nid: string;
  purpose: string;
}

export interface UpdateUser {
  email: string;
  mobile: string;
  expirationDate: string;
}

export interface SignupResponse {
  visitorLogs: null;
  id: null;
  fullname: string;
  nid: string;
  companyName: string;
  purpose: string;
  email: string;
  mobile: string;
  visitorid: string;
  expirationDate: string;
}

export interface VisitorLog {
  purpose: String;
  dateLogin: String;
}

export interface LoginResponse {
  user: User;
  id: integer;
  purpose: String;
  dateLogin: String;
}
