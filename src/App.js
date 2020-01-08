import React from 'react'
import { Route, Switch } from 'react-router'
import URLS from './config/urls'
import HomeView from './views/Home'
import AboutUsView from './views/AboutUs'
import Header from './components/Header'

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path={URLS.HOME} component={HomeView} />
        <Route exact path={URLS.ABOUT_US} component={AboutUsView} />
      </Switch>
    </div>
  );
}

export default App;
