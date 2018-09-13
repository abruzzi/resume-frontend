import React, { Component } from 'react';

import Basic from './Basic'
import Skillset from './Skillset'
import Experience from './Experience'

class Resume extends Component {

  render() {
    return (
    <div className="container">
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

export default Resume;
