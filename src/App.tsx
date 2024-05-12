import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
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
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/:chatId" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
