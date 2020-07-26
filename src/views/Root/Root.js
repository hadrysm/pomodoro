import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainTemplate from 'templates/MainTemplate';
import SettingsPage from 'views/SettingsPage/SettingsPage';
import TimerPage from 'views/TimerPage/TimerPage';

const App = () => (
  <MainTemplate>
    <Switch>
      <Route path="/" component={TimerPage} exact />
      <Route path="/settings" component={SettingsPage} exact />
    </Switch>
  </MainTemplate>
);

export default App;
