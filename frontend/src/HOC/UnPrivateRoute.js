import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalContext } from "../Context/Global";

const UnPrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(GlobalContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated)
          return (
            <Redirect
              to={{ pathname: "/dashboard", state: { from: props.location } }}
            />
          );

        return <Component {...props} />;
      }}
    />
  );
};

export default UnPrivateRoute;
