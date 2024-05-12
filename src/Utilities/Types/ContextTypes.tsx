import { Dispatch, SetStateAction } from "react";
import {
  chatsStateType,
  conversationType,
  requestType,
  userLoginInfoType,
} from "./dataTypes";

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
  logout: () => void;
  userInfo: string | null;
}

export interface AuthUserContextProviderProps {
  children: React.ReactNode;
}

export interface ChatsContextValues {
  chatsState: chatsStateType[];
  setChatsState: Dispatch<SetStateAction<chatsStateType[]>>;
  deleteChat: (id: string) => void;
  addConversationToActiveChat: (
    activeId: string,
    newConversation: conversationType
  ) => void;
  createNewChat: () => void;
  setChatTitle: (id: string, text: string) => void;
}

export interface ChatsContextProviderProps {
  children: React.ReactNode;
}
