import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import MediaPlayer from "./MediaPlayer";
import Users from "./Users";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../redux/auth/auth.selectors";
import PageNotFount from "../PageNotFound";
import Welcome from "./Welcome";

const PrivateRoute = ({ isAuthenticated, children, ...otherProps }) => {
  if (isAuthenticated) {
    return <Route {...otherProps} />;
  } else {
    return <Redirect to={"/login"} />;
  }
};

const Routing = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  const pages = [
    { url: "/users", component: Users, isPrivate: true },
    { url: "/login", component: () => <Welcome mode="login" />, isPrivate: false },
    { url: "/signup", component: () => <Welcome mode="signup" />, isPrivate: false },
    { url: "/", component: MediaPlayer, isPrivate: true },
    { url: "*", components: PageNotFount, isPrivate: false }
  ];

  return (
    <BrowserRouter>
      <Switch>
        {pages.map(({ url, component, isPrivate }) =>
          isPrivate ? (
            <PrivateRoute key={url} isAuthenticated={isAuthenticated} path={url} component={component} />
          ) : (
            <Route key={url} path={url} component={component} />
          )
        )}
      </Switch>
      {/*<MediaPlayer />*/}
    </BrowserRouter>
  );
};

export default Routing;
