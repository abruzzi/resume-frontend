import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const employee = {
  "id": 14323,
  "name": "Juntao Qiu",
  "title": "Web Developer / Designer",
  "bio": [
    "",
    ""
  ],
  "skills": [
    {
      "category": "Project Portfolio Management",
      "description": "Value-based project prioritisation, Pipeline management, Resource planning, Delivery assurance"
    },
    {
      "category": "Agile Project Management",
      "description": "Inception facilitation, Release Planning, Iteration Management"
    }
  ],
  "experiences": [
    {
      "project": "Quick Service Restaurant industry, Australia",
      "role": "Delivery Principal",
      "description": [
        "Racha lead a client project portfolio for a year, ensuring the business vision was understood and maintained through all levels of the organisation, teams were protected from disruption and blockers were removed, achieving the delivery of 12 projects in the year, including major innovative products and services to revolutionise the Quick Service Restaurant industry."
      ],
      "type": 'ThoughtWorks'
    }
  ],
  "education": []
}

ReactDOM.render(<App employee={employee} />, document.getElementById('root'));
