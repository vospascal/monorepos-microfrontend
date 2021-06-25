import React from "react";

import Counter from "./components/Counter/Counter.loadable";

const Footer = React.lazy(() => import("footer/Footer"));
const Header = React.lazy(() => import("header/Header"));
const Content = React.lazy(() => import("content/Content"));

import { Route, Switch } from "react-router-dom";
import AsyncLoader from "./components/AsyncLoader/AsyncLoader";
import { lazyLoad } from "../../shared/utils/loadable";

const Shell = () => {
  return (
    <div
      style={{
        border: "2px dashed LightSlateGray",
        padding: "5px",
        margin: "5px",
      }}
    >
      <AsyncLoader>
        <Header></Header>
      </AsyncLoader>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Counter></Counter>
              <AsyncLoader>
                <Content></Content>
              </AsyncLoader>
            </div>
          )}
        />
        <Route exact path="/test" render={() => <div>test</div>} />
      </Switch>
      <AsyncLoader>
        <Footer></Footer>
      </AsyncLoader>
    </div>
  );
};

export default Shell;
