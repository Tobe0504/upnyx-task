import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { InfoPopupProps } from "../../Utilities/Types/componentPropTypes";
import classes from "./InfoPopup.module.css";

const InfoPopup = ({ children, text }: InfoPopupProps) => {
  // Context
  const { theme } = useContext(ThemeContext);
  return (
    <div className={classes.container}>
      <div>{children}</div>
      <div
        style={
          theme === "dark"
            ? { background: "#323842ff" }
            : { background: "#fff" }
        }
      >
        {text}
      </div>
    </div>
  );
};

export default InfoPopup;
