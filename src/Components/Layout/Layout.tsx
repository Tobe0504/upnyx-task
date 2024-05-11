import { useContext } from "react";
import Header from "../../Containers/Header/Header";
import { ThemeContext } from "../../Context/ThemeContext";
import { LayoutProps } from "../../Utilities/Types/componentPropTypes";
import classes from "./Layout.module.css";

const Layout = ({ children }: LayoutProps) => {
  // Context
  const { theme } = useContext(ThemeContext);

  return (
    <section className={classes.container}>
      <div className={classes.header}>
        <Header theme={theme} />
      </div>
      <div className={classes.body}>{children}</div>
    </section>
  );
};

export default Layout;
