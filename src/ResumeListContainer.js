import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ResumeListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resumes: [    {
        "id": 14323,
        "name": "Juntao Qiu",
        "title": "Web Developer / Designer",
        "bio": [
          "Juntao Qiu is a senior Web application developer at ThoughtWorks. In the past ten years, he has been worked on a wild range of different types of Web applications, from traditional Web application with jQuery + JSP to SPAs with Backbone, Angular and React. He also is a technical author who has already had two books published: *JavaScript Core Concepts and Practices(2013)* and *Lightweight Web Application Development(2015)*.",
          "Juntao has been worked on a lot of tech stacks like Java, Ruby, Node.js and has a real passion for Clean Code, Refactoring, Test Driven Development. Additionally, he practices Muay Thai and Boxing when he isn't coding."
        ],
        "skills": [
          {
            "category": "Project Portfolio Management",
            "description": "Value-based project prioritisation, Pipeline management, Resource planning, Delivery assurance"
          },
          {
            "category": "Agile Project Management",
            "description": "Inception facilitation, Release Planning, Iteration Management"
          },
          {
            "category": "Project Portfolio Management",
            "description": "Value-based project prioritisation, Pipeline management, Resource planning, Delivery assurance"
          }
        ],
        "experience": [
          {
            "project": "Quick Service Restaurant industry, Australia",
            "role": "Delivery Principal",
            "description": [
              "Racha lead a client project portfolio for a year, ensuring the business vision was understood and maintained through all levels of the organisation, teams were protected from disruption and blockers were removed, achieving the delivery of 12 projects in the year, including major innovative products and services to revolutionise the Quick Service Restaurant industry."
            ]
          },
          {
            "project": "Quick Service Restaurant industry, Australia",
            "role": "Delivery Principal",
            "description": [
              "Racha lead a client project portfolio for a year, ensuring the business vision was understood and maintained through all levels of the organisation, teams were protected from disruption and blockers were removed, achieving the delivery of 12 projects in the year, including major innovative products and services to revolutionise the Quick Service Restaurant industry."
            ]
          }
        ],
        "education": []
      }]
    }
  }
  componentDidMount() {
    axios.get('/users').then(res => {
      this.setState({
        'resumes': res.data
      })
    })
  }

  render () {
    return (
      <ul>
        {this.state.resumes.map((resume, index) => <li className="resume-item" key={index}>
          <Link to={`/resume/${resume.id}`}>{resume.name}</Link>
          <Link className="pull-right" to={`/edit/${resume.id}`}>Edit</Link>
        </li>)}
        <li className="button-container">
          <Link className="button" to="/form">Create a new resume</Link>
        </li>
      </ul>
    )
  }
}

export default ResumeListContainer