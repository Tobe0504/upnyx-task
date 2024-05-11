import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthUserContextValues,
  AuthUserContextProviderProps,
} from "../Utilities/Types/ContextTypes";
import { requestType } from "../Utilities/Types/dataTypes";
import { ThemeContext } from "./ThemeContext";

export const AuthUserContext = createContext({} as AuthUserContextValues);

const AuthUserContextProvider = ({
  children,
}: AuthUserContextProviderProps) => {
  // Context
  const { setTheme } = useContext(ThemeContext);

  // States
  const [userLoginInfo, setUserLoginInfo] = useState({
    email: "",
    password: "",
  });
  const [signInRequestObject, setSignInRequestObject] = useState<requestType>({
    isLoading: false,
  });

  //   Router
  const navigate = useNavigate();

  //   Functions
  const signIn = () => {
    setSignInRequestObject({ isLoading: true });
    setTimeout(() => {
      setSignInRequestObject({ isLoading: false });
      sessionStorage.setItem("upnyx-access", JSON.stringify(userLoginInfo));
      setTheme("light");
      navigate("/");
    }, 3000);
  };

  return (
    <AuthUserContext.Provider
      value={{ userLoginInfo, setUserLoginInfo, signIn, signInRequestObject }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserContextProvider;
