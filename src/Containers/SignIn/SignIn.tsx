import Input from "../../Components/Input/Input";
import Layout from "../../Components/Layout/Layout";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import classes from "./SignIn.module.css";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { inputChangeHandler } from "../../HelperFunctions/inputChangeHandler";
import { useContext } from "react";
import { AuthUserContext } from "../../Context/AuthUserContext";
import { ThemeContext } from "../../Context/ThemeContext";
import Error from "../../Components/Error/Error";

const SignIn = () => {
  // Context
  const { setUserLoginInfo, userLoginInfo, signIn, signInRequestObject } =
    useContext(AuthUserContext);
  const { theme } = useContext(ThemeContext);
  return (
    <Layout>
      <div className={classes.container}>
        <form
          style={
            theme === "dark"
              ? { background: "#171A1FF" }
              : { background: "#0095A9FF" }
          }
        >
          <h4>Welcome Back</h4>
          <p>Sign in to continue to Aiworksquad.</p>

          {signInRequestObject?.error && (
            <Error type="error">{signInRequestObject?.error}</Error>
          )}
          <Input
            placeholder="Email"
            icon={<EmailOutlinedIcon />}
            isRequired
            errorMessage="Please input a username"
            name="email"
            onChange={(e) => {
              inputChangeHandler(e, setUserLoginInfo);
            }}
            value={userLoginInfo.email}
          />
          <Input
            placeholder="Password"
            type="password"
            icon={<LockOutlinedIcon />}
            isRequired
            errorMessage="Please input your password"
            name="password"
            onChange={(e) => {
              inputChangeHandler(e, setUserLoginInfo);
            }}
            value={userLoginInfo.password}
          />
          <div className={classes.forgetPassword}>
            <div>
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Link to="/">Forgot password?</Link>
          </div>

          <Button
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
            loading={signInRequestObject.isLoading}
            disabled={!userLoginInfo?.email || !userLoginInfo?.password}
          >
            Login
          </Button>
        </form>
      </div>
    </Layout>
  );
};

export default SignIn;
