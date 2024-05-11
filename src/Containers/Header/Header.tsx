import { HeaderProps } from "../../Utilities/Types/componentPropTypes";
import classes from "./Header.module.css";
import darkLogo from "../../Assets/Images/logoDark.png";

const Header = ({ theme }: HeaderProps) => {
  return (
    <div
      className={classes.container}
      style={
        theme === "dark"
          ? { background: "#171A1FF" }
          : { background: "#0095A9FF" }
      }
    >
      <img src={darkLogo} alt="Logo" />
    </div>
  );
};

export default Header;
