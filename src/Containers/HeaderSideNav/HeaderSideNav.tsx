import classes from "./HeaderSideNav.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import HistorySectionAndCtas from "../HistorySectionAndCtas/HistorySectionAndCtas";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

type HeaderSideNavProps = {
  closeSideNav: () => void;
};

const HeaderSideNav = ({ closeSideNav }: HeaderSideNavProps) => {
  // Context
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={classes.container}
      style={
        theme === "dark"
          ? { background: "#323842ff", borderColor: "#fff" }
          : { background: "#fff", borderColor: "#171A1FFF" }
      }
    >
      <div className={classes.closeSideNavv}>
        <ClearIcon onClick={closeSideNav} />
      </div>
      <div>
        <HistorySectionAndCtas />
      </div>
    </section>
  );
};

export default HeaderSideNav;
