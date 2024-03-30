import { Navigate, Outlet } from "react-router-dom";

//  THIS IS THE APPROACH THAT DOES NOT USE THE FEATURES THAT COMES WITH THE DATA API AND DATA ROUTERS, LOADERS, ACTIONS
// THIS IS THE MOST COMMON WAY TO ACCOMPLISH PROTECTER ROUTES BECAUSE THE DATA API IS NEW

export default function LoginLayout() {
  const logueado = false;

  // if the Navigate component get render it will inmediately redirect to the path specified
  // The approach of preventing renders entirely of the protected routes.

  //      This is the approach if you are NOT using the features that comes
  //      with the data layer API and the data router     THIS IS THE MOST COMMON CASE BECAUSE NOBODY IS USING THE NEW FEATURES

  //
  //
  //

  if (!logueado) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
