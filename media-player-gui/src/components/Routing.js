import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import MediaPlayer from "./MediaPlayer";
import Start from "./Start";

const pages = [
  { url: "/admin", component: ()=><div/> },
  { url: "/listing", component: MediaPlayer },
  { url: "/", component: Start }
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
