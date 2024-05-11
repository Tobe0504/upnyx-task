import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Containers/Dashboard/Dashboard";
import SignIn from "./Containers/SignIn/SignIn";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  // Context
  const { theme } = useContext(ThemeContext);
  return (
    <div id={theme === "dark" ? "dark" : "light"}>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
