import React from 'react'
import { Route, Switch } from 'react-router'
import URLS from './config/urls'
import HomeView from './views/Home'
import AboutUsView from './views/AboutUs'
import Header from './components/Header'
import './index.scss'
import PostPage from './components/PostPage'

const App = () => {
  return (
    <div>
      <Header />
      <div className="jumbotron">
        <Switch>
          <Route exact path={URLS.HOME} component={HomeView} />
          <Route exact path={URLS.ABOUT_US} component={AboutUsView} />
          <Route exact path={URLS.POST_ONE} component={PostPage} />
        </Switch>
      </div>
    </div>
  )
}

export default App
