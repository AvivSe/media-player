import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import React from "react";
import MediaPlayer from "./MediaPlayer";
import Start from "./Start";
import Admin from "./Admin";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../redux/auth/auth.selectors";

const pages = [
  { url: "/admin", component: Admin, isPrivate: true },
  { url: "/login", component: Start, isPrivate: false },
  { url: "/", component: MediaPlayer, isPrivate: true }
];

const PrivateRoute = ({ isAuthenticated, ...otherProps }) => {
  if (isAuthenticated) {
    return <Route {...otherProps}/>;
  } else {
    return <Redirect to={"/login"}/>;
  }
};

const Routing = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <BrowserRouter>
      <Switch>
        {pages.map(({ url, component, isPrivate }) => (
          isPrivate ?
            <PrivateRoute key={url} isAuthenticated={isAuthenticated} path={url} component={component}/>
            : <Route key={url} path={url} component={component}/>
        ))}
      </Switch>
      {/*<MediaPlayer />*/}
    </BrowserRouter>
  );
};

export default Routing;
