import { Dispatch, SetStateAction } from "react";
import { requestType, userLoginInfoType } from "./dataTypes";

export interface ThemeContextValues {
  theme: "dark" | "light";
  setTheme: Dispatch<SetStateAction<"light" | "dark">>;
}

export interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export interface AuthUserContextValues {
  userLoginInfo: userLoginInfoType;
  setUserLoginInfo: Dispatch<SetStateAction<userLoginInfoType>>;
  signInRequestObject: requestType;
  signIn: () => void;
}

export interface AuthUserContextProviderProps {
  children: React.ReactNode;
}
