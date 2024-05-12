import classes from "./Header.module.css";
import darkLogo from "../../Assets/Images/logoDark.png";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { AuthUserContext } from "../../Context/AuthUserContext";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Header = () => {
  // Context
  const { theme } = useContext(ThemeContext);
  const { userLoginInfo, logout, userInfo } = useContext(AuthUserContext);

  return (
    <div
      className={classes.container}
      style={
        theme === "dark"
          ? { background: "#323842ff" }
          : { background: "#0095A9FF" }
      }
    >
      <img src={darkLogo} alt="Logo" />

      {userInfo && (
        <div
          className={classes.department}
          style={
            theme === "dark"
              ? { background: "#323842ff", borderColor: "#fff" }
              : { background: "#fff", borderColor: "#171A1FFF" }
          }
        >
          Department: Marketing
        </div>
      )}

      {userInfo && (
        <div className={classes.account} onClick={logout}>
          <AccountCircleOutlinedIcon />
          <span>{userLoginInfo.email}</span>
        </div>
      )}
    </div>
  );
};

export default Header;
