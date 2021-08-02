import React, { FC, ReactElement } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './pages/Home';
import Transactions from './pages/Transaction';
import Header from './components/Header';
import './styles/output.css'

const App: FC = (): ReactElement => {

  return (
    <Router>
      <Header />
      <div className="px-14 py-8">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pending" component={Home} />
        <Route path="/settings" component={Home} />
        <Route path="/transaction" component={Transactions} />
      </Switch>
      </div>
    </Router>
  )
}

export default App
