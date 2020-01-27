import React from 'react'
import { Route, Switch } from 'react-router-dom'
import URLS from './config/urls'
import HomeView from './views/HomeView'
import AboutUsView from './views/AboutUsView'
import Header from './components/Header'
import './index.scss'
import PostPageView from './views/PostPageView'
import PostsView from './views/PostsView'
import ContactView from './views/ContactView'
import Footer from './components/Footer'

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
          <Route exact path={URLS.CONTACT} component={ContactView} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App
