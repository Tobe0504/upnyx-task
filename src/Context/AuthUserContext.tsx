import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
  const location = useLocation();

  //   Functions
  const signIn = () => {
    setSignInRequestObject({ isLoading: true, error: "" });
    setTimeout(() => {
      if (
        userLoginInfo.email !== "user123" &&
        userLoginInfo.password !== "pass123"
      ) {
        setSignInRequestObject({
          isLoading: false,
          error: "You have used invalid login credentials",
        });
      } else {
        setSignInRequestObject({ isLoading: false });
        sessionStorage.setItem("upnyx-access", JSON.stringify(userLoginInfo));
        setTheme("light");
        navigate("/");
      }
    }, 3000);
  };

  const logout = () => {
    sessionStorage.removeItem("upnyx-access");
    setUserLoginInfo({ email: "", password: "" });
    navigate("/sign-in", { state: location.pathname });
  };

  // Session storage
  const userInfo = sessionStorage.getItem("upnyx-access");

  // Effects
  useEffect(() => {
    if (userInfo) {
      setUserLoginInfo(JSON.parse(userInfo));
    }

    // eslint-disable-next-line
  }, []);

  return (
    <AuthUserContext.Provider
      value={{
        userLoginInfo,
        setUserLoginInfo,
        signIn,
        signInRequestObject,
        logout,
        userInfo,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserContextProvider;
