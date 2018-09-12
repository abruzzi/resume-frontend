import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios'


class AppWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      employee: {
        bio: [],
        skills: [],
        experiences: []
      }
    }
  }

  componentDidMount () {
    axios.get('/users/14323').then((res) => {
      this.setState({
        employee: res.data
      })
    })
  }

  render() {
    return (<App employee={this.state.employee} />)
  }
}

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
