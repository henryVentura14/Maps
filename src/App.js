import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store'
import ContentCards from './components/Layout/ContentCards'
import ContentArticle from './components/Layout/ContentArticle'
import Article from './components/Article/Article'
import './styles/App.css'
import './styles/App.sass'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={ContentCards} />
          <Route exact path='/articles/:slug' component={ContentArticle} />
          <Route exact path='/article/:slug' component={Article} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
