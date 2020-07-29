import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from 'routes';

import MainTemplate from 'templates/MainTemplate';
import SettingsPage from 'views/SettingsPage';
import TimerPage from 'views/TimerPage/TimerPage';

const App = () => (
  <MainTemplate>
    <Switch>
      <Route path={routes.timer} component={TimerPage} exact />
      <Route path={routes.settings} component={SettingsPage} exact />
    </Switch>
  </MainTemplate>
);

export default App;
