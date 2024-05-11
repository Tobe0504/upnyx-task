import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  // Local storage
  const userToken = sessionStorage.getItem("upnyx-access");
  // Location
  const location = useLocation();

  return (
    <>
      {userToken ? (
        <Outlet />
      ) : (
        <Navigate to="/sign-in" replace={true} state={location.pathname} />
      )}
    </>
  );
};

export default RequireAuth;
