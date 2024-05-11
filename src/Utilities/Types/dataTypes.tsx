export interface userLoginInfoType {
  email: string;
  password: string;
}
[];

export interface requestType {
  isLoading: boolean;
  data?: null | any[] | string | any;
  error?: null | any;
}
