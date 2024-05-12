import { createContext, useEffect, useId, useState } from "react";
import { chats } from "../Utilities/chats";
import {
  ChatsContextValues,
  ChatsContextProviderProps,
} from "../Utilities/Types/ContextTypes";
import {
  chatsStateType,
  chatsType,
  conversationType,
} from "../Utilities/Types/dataTypes";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

export const ChatsContext = createContext({} as ChatsContextValues);

const ChatsContextProvider = ({ children }: ChatsContextProviderProps) => {
  // States
  const [chatsState, setChatsState] = useState<chatsStateType[]>(
    chats.map((data) => {
      return { ...data, id: v4() };
    })
  );

  //   Context
  const navigate = useNavigate();

  //   Utils
  const deleteChat = (id: string) => {
    const chatsStateCopy: chatsStateType[] = chatsState.filter((data, i) => {
      return data.id !== id;
    });

    setChatsState(chatsStateCopy);
  };

  const addConversationToActiveChat = (
    activeId: string,
    newConversation: conversationType
  ) => {
    setChatsState((prevChats) =>
      prevChats.map((chat) =>
        chat.id.toString() === activeId
          ? { ...chat, conversation: [...chat?.conversation, newConversation] }
          : chat
      )
    );
  };

  const createNewChat = () => {
    setChatsState((prevState: any) => {
      return [...prevState, { title: "New chat", conversation: [], id: v4() }];
    });
  };

  const setChatTitle = (id: string, text: string) => {
    setChatsState((prevState) =>
      prevState.map((data) =>
        id === data.id ? { ...data, title: text } : { ...data }
      )
    );
  };

  return (
    <ChatsContext.Provider
      value={{
        chatsState,
        setChatsState,
        deleteChat,
        addConversationToActiveChat,
        createNewChat,
        setChatTitle,
      }}
    >
      {children}
    </ChatsContext.Provider>
  );
};

export default ChatsContextProvider;
