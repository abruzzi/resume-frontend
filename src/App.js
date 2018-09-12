import React, { Component } from 'react';
import './App.css';

import Basic from './components/Basic'
import Skillset from './components/Skillset'
import Experience from './components/Experience'

class App extends Component {

  render() {
    return (
    <div className="resume-container">
      <Basic {...this.props.employee} />
      <Skillset {...this.props.employee}/>
      <Experience {...this.props.employee} type="ThoughtWorks" />
      <Experience {...this.props.employee} type="Other" />
      <section className="education block">
        <h3 className="tagline">Education</h3>
      </section>    
    </div>
    );
  }
}

export default App;
