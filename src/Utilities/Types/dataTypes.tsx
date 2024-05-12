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

export interface chatsType {
  title: string;
  conversation: { text: string; isResponse: boolean }[];
}

export interface chatsStateType {
  title: string;
  id: string;
  conversation: { text: string; isResponse: boolean }[];
}

export interface conversationType {
  text: string;
  isResponse: boolean;
}
