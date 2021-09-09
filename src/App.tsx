import React, { FC, ReactElement } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './pages/Home';
import Header from './components/Navigation';
import './styles/output.css'

const App: FC = (): ReactElement => {

  return (
    <Router>
      <Header />
      <div className="px-14 py-8 font-mono">
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      </div>
    </Router>
  )
}

export default App
