import React from "react";

import Footer from "footer/Footer";
import Header from "header/Header";
import Content from "content/Content";
import Counter from "./components/Counter/Counter";

import { Route, Switch } from "react-router-dom";

const Shell = () => {
  return (
    <div
      style={{
        border: "2px dashed LightSlateGray",
        padding: "5px",
        margin: "5px",
      }}
    >
      <Header></Header>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <Counter></Counter>
              <Content></Content>
            </div>
          )}
        />
        <Route exact path="/test" render={() => <div>test</div>} />
      </Switch>
      <Footer></Footer>
    </div>
  );
};

export default Shell;
