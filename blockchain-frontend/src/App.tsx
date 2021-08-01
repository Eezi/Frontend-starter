import React, { FC, ReactElement } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './pages/Home';
import Header from './components/Header';
import './styles/output.css'

const App: FC = (): ReactElement => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/pending" component={Home} />
        <Route path="/settings" component={Home} />
        <Route path="/transaction" component={Home} />
      </Switch>
    </Router>
  )
}

export default App
