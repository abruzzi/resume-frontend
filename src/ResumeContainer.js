import React, { Component } from 'react'
import Resume from './components/Resume'
import axios from 'axios'

class ResumeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employee: {
        bio: [],
        skills: [],
        experience: []
      }
    }
  }

  componentDidMount () {
    axios.get(`/users/${this.props.match.params.id}`).then((res) => {
      this.setState({
        employee: res.data
      })
    })
  }

  render () {
    return (<Resume employee={this.state.employee} />)
  }
}

export default ResumeContainer