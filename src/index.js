import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './Home'
import ResumeForm from './ResumeForm'
import ResumeContainer from './ResumeContainer'

import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class AppWrapper extends Component {
  render() {
    return (
    <div className="main">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/form' component={ResumeForm}/>
        <Route path='/edit/:id' component={ResumeForm}/>
        <Route path='/resume/:id' component={ResumeContainer}/>
      </Switch>
    </div>)
  }
}

ReactDOM.render(
  <Router>
    <AppWrapper />
  </Router>, document.getElementById('root'));
