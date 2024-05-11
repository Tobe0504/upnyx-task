import { useState } from "react";
import classes from "./Input.module.css";

type InputProps = {
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  value?: string;
  errorMessage?: string;
  inValidCondition?: boolean;
  placeholder?: string;
  tip?: string;
  style?: React.CSSProperties;
  name?: string;
  condition?: boolean;
  readOnly?: boolean;
  icon?: React.ReactNode;
  isRequired?: boolean;
};

const Input = ({
  type,
  onChange,
  onBlur,
  value,
  errorMessage,
  inValidCondition,
  placeholder,
  tip,
  style,
  name,
  condition,
  readOnly,
  icon,
  isRequired,
}: InputProps) => {
  // States
  const [invalid, setInvalid] = useState(false);

  return (
    <div className={classes.container} style={style}>
      <span className={classes.input}>
        <span className={classes.icon}>{icon}</span>
        <input
          type={type || "text"}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          readOnly={readOnly}
          onBlur={(e) => {
            if (isRequired && e.target.value === "") {
              setInvalid(true);
            } else {
              setInvalid(false);
            }

            if (condition !== undefined && condition === false) {
              setInvalid(true);
            }
            if (onBlur) onBlur();
          }}
          value={value}
          className={invalid ? classes.invalid : classes.valid}
        />
      </span>
      {(invalid || inValidCondition) && (
        <span className={classes.errorMessage}>
          {errorMessage || "*invalid"}{" "}
        </span>
      )}
      {tip && <span className={classes.tip}>{tip}</span>}
    </div>
  );
};

export default Input;
