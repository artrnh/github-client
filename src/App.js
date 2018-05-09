import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout';
import Discover from './components/Discover/Discover';
import Profile from './components/Profile/Profile';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/">
        <Redirect to="/profile" />
      </Route>

      <Route path="/profile" component={Profile} />
      <Route path="/discover" component={Discover} />
    </Switch>
  </Layout>
);

export default App;
