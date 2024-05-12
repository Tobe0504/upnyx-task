import classes from "./Header.module.css";
import darkLogo from "../../Assets/Images/logoDark.png";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { AuthUserContext } from "../../Context/AuthUserContext";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { ChatsContext } from "../../Context/ChatsContext";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HeaderSideNav from "../HeaderSideNav/HeaderSideNav";

const Header = () => {
  // Context
  const { theme } = useContext(ThemeContext);
  const { userLoginInfo, logout, userInfo } = useContext(AuthUserContext);
  const { activeDepartment, setActiveDepartment } = useContext(ChatsContext);

  // States
  const [dropdownIsActive, setDropdownIsActive] = useState(false);

  // Utils
  const departments = ["Marketing", "Sales"];

  // Refs
  const sideNav = useRef<null | HTMLDivElement>(null);

  const openSideNav = () => {
    if (sideNav.current) {
      sideNav.current.style.width = "100%";
    }
  };

  const closeSideNav = () => {
    if (sideNav.current) {
      sideNav.current.style.width = "0%";
    }
  };

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
          onClick={() => {
            setDropdownIsActive((prevState) => !prevState);
          }}
        >
          Department: {activeDepartment}
          {dropdownIsActive && (
            <div
              className={classes.dropdown}
              style={
                theme === "dark"
                  ? { background: "#323842ff" }
                  : { background: "#fff" }
              }
            >
              {departments.map((data, i) => {
                return (
                  <span
                    key={i}
                    onClick={() => {
                      setActiveDepartment(data);
                    }}
                  >
                    {data}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      )}

      {userInfo && (
        <div className={classes.account} onClick={logout}>
          <AccountCircleOutlinedIcon />
          <span>{userLoginInfo.email}</span>
        </div>
      )}

      {userInfo && (
        <span className={classes.menu} onClick={openSideNav}>
          <MenuOutlinedIcon />
        </span>
      )}

      <div className={classes.sideNav} ref={sideNav}>
        <HeaderSideNav closeSideNav={closeSideNav} />
      </div>
    </div>
  );
};

export default Header;
