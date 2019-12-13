import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import MediaPlayer from "./MediaPlayer";
import Start from "./Start";
import Admin from "./Admin";

const pages = [
  { url: "/admin", component: Admin },
  { url: "/signup", component: ()=><Start mode={'signUp'}/> },
  { url: "/login", component: Start },
  { url: "/", component: MediaPlayer }
];

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        {pages.map(({ url, component }) => (
          <Route key={url} path={url} component={component} />
        ))}
      </Switch>
      {/*<MediaPlayer />*/}
    </BrowserRouter>
  );
};

export default Routing;
