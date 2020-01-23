import React from 'react'
import { Route, Switch } from 'react-router-dom'
import URLS from './config/urls'
import HomeView from './views/HomeView'
import AboutUsView from './views/AboutUsView'
import Header from './components/Header'
import './index.scss'
import PostPageView from './views/PostPageView'
import PostsView from './views/PostsView'

const App = () => {
  return (
    <div>
      <Header />
      <div className="jumbotron">
        <Switch>
          <Route exact path={URLS.HOME} component={HomeView} />
          <Route exact path={URLS.ABOUT_US} component={AboutUsView} />
          <Route exact path={URLS.POST} component={PostPageView} />
          <Route exact path={URLS.POSTS} component={PostsView} />
        </Switch>
      </div>
    </div>
  )
}

export default App
