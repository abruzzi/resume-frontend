import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ResumeListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resumes: []
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
        {this.state.resumes.map(resume => <li className="resume-item">
          <Link to={`/resume/${resume.id}`}>{resume.name}</Link>
        </li>)}
        <li className="button-container">
          <Link className="button" to="/form">Create a new resume</Link>
        </li>
      </ul>
    )
  }
}

export default ResumeListContainer