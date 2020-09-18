import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { GlobalContext } from "../Context/Global";

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { isAuthenticated } = useContext(GlobalContext);
  // console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated)
          return (
            <Redirect
              to={{ pathname: "/auth", state: { from: props.location } }}
            />
          );
        // if (!isAuthenticated && isAdmin)
        //   return <Redirect to={{pathname: '/portal-admin/login', state: {from: props.location}}} />;

        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
