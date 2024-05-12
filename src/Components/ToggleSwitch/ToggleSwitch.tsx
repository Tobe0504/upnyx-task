import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import classes from "./ToggleSwitch.module.css";

type ToggleSwitchType = {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  readOnly?: boolean;
};

const ToggleSwitch = (props: ToggleSwitchType) => {
  // Context
  const { theme } = useContext(ThemeContext);
  return (
    <label className={classes.switch}>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={props.onChange}
        readOnly={props.readOnly}
        name={props.name}
        id={props.id}
        className={`${
          theme === "dark" ? classes.darkInput : classes.lightInput
        }`}
      />
      <span className={classes.sliderRound}></span>
    </label>
  );
};

export default ToggleSwitch;
