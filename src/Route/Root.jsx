import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainScene from '../Scenes/MainScene';

// eslint-disable-next-line arrow-body-style
const RootRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/cards">
          <MainScene />
        </Route>
        <Route
          path="/card/:taskID"
          render={(routeProps) => (
            `Card details ID ${routeProps.match.params.taskID}`)}
        />
        <Route exact path="/">
          <div>
            Main
          </div>
        </Route>
        <Route>
          <Redirect to="/cards" />
        </Route>
      </Switch>
    </>
  );
};

export default RootRouter;
