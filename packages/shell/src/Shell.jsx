import React from "react";

import Counter from "./components/Counter/Counter.loadable";

const Footer = React.lazy(() => import("footer/Footer"));
const Header = React.lazy(() => import("header/Header"));
const Content = React.lazy(() => import("content/Content"));

const PageOne = React.lazy(() => import("pageone/PageOne"));
const PageTwo = React.lazy(() => import("pagetwo/PageTwo"));

import { Route, Switch } from "react-router-dom";
import AsyncLoader from "./components/AsyncLoader/AsyncLoader";

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
            <div
              style={{
                border: "2px dashed cornflowerBlue",
                padding: "5px",
                margin: "5px",
              }}
            >
              test
            </div>
          )}
        />
        <Route
          exact
          path="/test"
          render={() => (
            <div>
              <Counter></Counter>
              <AsyncLoader>
                <Content></Content>
              </AsyncLoader>
            </div>
          )}
        />
        <Route
          exact
          path="/pageone"
          render={() => (
            <div>
              <AsyncLoader>
                <PageOne></PageOne>
              </AsyncLoader>
            </div>
          )}
        />
        <Route
          exact
          path="/pagetwo"
          render={() => (
            <div>
              <AsyncLoader>
                <PageTwo></PageTwo>
              </AsyncLoader>
            </div>
          )}
        />
      </Switch>
      <AsyncLoader>
        <Footer></Footer>
      </AsyncLoader>
    </div>
  );
};

export default Shell;
